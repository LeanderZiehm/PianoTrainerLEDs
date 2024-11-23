import mido
import os

transposeKeyOffset = 0  # 1 #2
USE_MAJOR_SCALE = True

DIR_MIDIs = "midis"
DIR_TXTs = "txts"

def midiNumberToNoteName(midiNumber):
    if USE_MAJOR_SCALE:
        MIDI_TO_NAME = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    else:
        MIDI_TO_NAME = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"]

    noteLetter = MIDI_TO_NAME[midiNumber % 12]
    noteNumber = (midiNumber // 12) - 1 + transposeKeyOffset
    noteName = f"{noteLetter}{noteNumber}"
    return noteName

def noteNameToMidiNumber(noteName):
    NAME_TO_MIDI = {"C": 0, "C#": 1, "Db": 1, "D": 2, "D#": 3, "Eb": 3, "E": 4, "F": 5, "F#": 6, "Gb": 6, "G": 7, "G#": 8, "Ab": 8, "A": 9, "A#": 10, "Bb": 10, "B": 11}
    noteName = noteName.strip()
    note_letter = noteName[:-1]
    noteNumber = int(noteName[-1])
    note_number = NAME_TO_MIDI[note_letter]
    midi_note = note_number + 12 * (noteNumber + 1 - transposeKeyOffset)
    return midi_note


def getUserSelectedMidiFileName():
    midi_files = [file for file in os.listdir(DIR_MIDIs) if file.endswith(".mid")]
    selection = 0
    if len(midi_files) > 1:
        # os.system("clr")
        for i, midiFileName in enumerate(midi_files):
            print(f"    {i}: {midiFileName}")
        selection = input("Enter the number of the MIDI file you want to convert: ")
        selection = int(selection)

    fileName = midi_files[selection]

    filePath = os.path.join(DIR_MIDIs, fileName)

    return filePath


def removeDuplicateWordsInLineOrderThemAndAddNewLine(text):
    indexOfLastNewLine = text.rfind("\n")
    indexOfLastNewLine += 1  # remove new LineSymbol
    thisLine = text[indexOfLastNewLine:]
    words = thisLine.split(" ")
    uniqueWords = set(words)
    uniqueWords = [w for w in uniqueWords if w.strip() != ""]  # remove empty words
    orderedUniqueWords = sorted(uniqueWords, key=noteNameToMidiNumber)
    cleanLine = " ".join(orderedUniqueWords)
    prevText = text[:indexOfLastNewLine]

    if cleanLine.strip() == "":
        textToReturn = prevText
    else:
        textToReturn = prevText + cleanLine + "\n"
    return textToReturn


def noteNameToMidiNumber(noteName, transposeKeyOffset=0):
    NAME_TO_MIDI = {"C": 0, "C#": 1, "Db": 1, "D": 2, "D#": 3, "Eb": 3, "E": 4, "F": 5, "F#": 6, "Gb": 6, "G": 7, "G#": 8, "Ab": 8, "A": 9, "A#": 10, "Bb": 10, "B": 11}
    noteName = noteName.strip()
    note_letter = noteName[:-1]
    noteNumber = int(noteName[-1])
    note_number = NAME_TO_MIDI[note_letter]
    midi_note = note_number + 12 * (noteNumber + 1 - transposeKeyOffset)
    return midi_note


def process_midi_file(filePath=None, saveNotesToFile=False):
    if not filePath or not filePath.endswith(".mid") or not os.path.exists(filePath) or filePath == "USER_SELECT":
        filePath = getUserSelectedMidiFileName()
        if not filePath:
            return None

    midi_file = mido.MidiFile(filePath)
    track = max(midi_file.tracks, key=len)

    toSave = ""
    for msg in track:
        if msg.type == "note_on" and msg.velocity > 0:
            note = midiNumberToNoteName(msg.note)
            time = msg.time
            if time != 0:
                toSave = removeDuplicateWordsInLineOrderThemAndAddNewLine(toSave)
            toSave += f"{note} "

    if saveNotesToFile:

        fileName = os.path.basename(filePath)
        txtPath = os.path.join(DIR_TXTs, fileName[:-4] + "_Notes.txt")
        # toSaveFileName = filePath[:-4] + "_Notes.txt"
        with open(txtPath, "w") as file:
            file.write(toSave)
        print(f"Saved notes to {txtPath}")
        os.system(f"start {txtPath}")

    midi_numbers_list = []
    for line in toSave.strip().split("\n"):
        midi_numbers = [noteNameToMidiNumber(note) for note in line.split()]
        midi_numbers_list.append(midi_numbers)

    return midi_numbers_list

def main():
    fileName = "USER_SELECT"
    process_midi_file(fileName, True)
    print("Done")
    input("Press Enter to Exit")


if __name__ == "__main__":
    main()
