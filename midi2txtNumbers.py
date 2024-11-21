import mido
import os

transposeKeyOffset = 0#1 #2
USE_MAJOR_SCALE = True

def midiNumberToNoteName(midiNumber):
    if USE_MAJOR_SCALE:
        MIDI_TO_NAME = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    else:
        MIDI_TO_NAME = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B']

    noteLetter = MIDI_TO_NAME[midiNumber % 12]
    noteNumber = (midiNumber // 12) -1 + transposeKeyOffset 
    noteName = f"{noteLetter}{noteNumber}"
    return noteName

def noteNameToMidiNumber(noteName):
    NAME_TO_MIDI = {'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3,
                  'E': 4, 'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8,
                  'A': 9, 'A#': 10, 'Bb': 10, 'B': 11}
    noteName = noteName.strip()
    # if '-' in noteName:
    #     note_letter,noteNumber = noteName.split('-')
    #     noteNumber = int(noteNumber)
    # else:
    note_letter = noteName[:-1]
    noteNumber = int(noteName[-1])
    note_number = NAME_TO_MIDI[note_letter]
    midi_note = note_number + 12 * (noteNumber + 1 - transposeKeyOffset)
    return midi_note

def getUserSelectedMidiFileName():
    midi_files = [file for file in os.listdir() if file.endswith(".mid")]
    selection = 0
    if len(midi_files) > 1:
        # os.system("clr")
        for i,midiFileName in enumerate(midi_files):
            print(f"    {i}: {midiFileName}")
        selection = input("Enter the number of the MIDI file you want to convert: ")
        selection = int(selection)


    fileName = midi_files[selection]
    return fileName

def removeDuplicateWordsInLineOrderThemAndAddNewLine(text):
    indexOfLastNewLine = text.rfind('\n')
    indexOfLastNewLine += 1 # remove new LineSymbol
    thisLine = text[indexOfLastNewLine:]
    words = thisLine.split(" ")
    uniqueWords = set(words)
    uniqueWords = [w for w in uniqueWords if w.strip() != ""] # remove empty words
    orderedUniqueWords = sorted(uniqueWords, key=noteNameToMidiNumber)
    cleanLine = " ".join(orderedUniqueWords)
    prevText = text[:indexOfLastNewLine]

    if cleanLine.strip() == "":
        textToReturn = prevText
    else:
        textToReturn = prevText + cleanLine + "\n"
    return textToReturn



def noteNameToMidiNumber(noteName, transposeKeyOffset=0):
    NAME_TO_MIDI = {'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3,
                    'E': 4, 'F': 5, 'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8,
                    'A': 9, 'A#': 10, 'Bb': 10, 'B': 11}
    noteName = noteName.strip()
    note_letter = noteName[:-1]
    noteNumber = int(noteName[-1])
    note_number = NAME_TO_MIDI[note_letter]
    midi_note = note_number + 12 * (noteNumber + 1 - transposeKeyOffset)
    return midi_note



def main():
    fileName = getUserSelectedMidiFileName()
    midi_file = mido.MidiFile(fileName)
    track = max(midi_file.tracks, key=len) #main track with most notes
    print(f'["{fileName}" has {len(midi_file.tracks)} tracks.]')
    print(f"[{track.name} has {len(track)} notes]")

    toSave = ""
    for msg in track:
        if 'note_' in msg.type:
            note = midiNumberToNoteName(msg.note)
            time = msg.time

            if time != 0:
                toSave = removeDuplicateWordsInLineOrderThemAndAddNewLine(toSave)
                # toSave += "\n"
        
            if msg.type == 'note_on':
                toSave += f"{note} "

    toSaveFileName = fileName[:-4]+"_Notes.txt"

    with open(toSaveFileName,"w") as file:
        file.write(toSave)

    # os.startfile(toSaveFileName)

    # Read from "C418Sweden_Notes.txt" and write as list of lists to "C418Sweden_NotesNumbers.txt"
    midi_numbers_list = []  # This will store the list of lists

    with open(toSaveFileName, "r") as infile:
        for line in infile:
            notes = line.split()
            midi_numbers = [noteNameToMidiNumber(note) for note in notes]
            midi_numbers_list.append(midi_numbers)


    toSaveFileNameNumber = fileName[:-4]+"_NotesNumbers.txt"

    # Save the list of lists to "C418Sweden_NotesNumbers.txt"
    with open(toSaveFileNameNumber, "w") as outfile:
        outfile.write(str(midi_numbers_list))





if __name__ == "__main__":
    main()