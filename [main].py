import serial
import time
import rtmidi
from mainNew import midi2json

filePath = "ErikSatieGymnopedieNo.1.mid"

arduino = serial.Serial("COM5", 9600)


midiin = rtmidi.RtMidiIn()
midiin.openPort(0)


numbersToSend = []
midiNumbersPressed = []

# OFFSET_TRANSPOSE = 12
# OFFSET_BASE = 4
# OFFSET = -2

GLOBAL_OFFSET = 0

OFFSET = -14
# OFFSET = -40

# midiNumbersFilename = "C418Sweden_NotesNumbers.txt"
# midiNumbersFilename = "alle_meine_entchen_NotesNumbers.txt"
import os

midiNumbersFilename = None  # Placeholder to store user selection


def getMidiesSelectedByUser():
    # List all MIDI files in the current working directory
    midi_files = [file for file in os.listdir(".") if file.lower().endswith(".mid")]

    if not midi_files:
        print("No MIDI files found in the current directory.")
        return None

    # Display MIDI files to the user
    print("MIDI files in the current directory:")
    for index, file in enumerate(midi_files, start=1):
        print(f"{index}: {file}")

    # Get user's selection
    while True:
        try:
            choice = int(input("Select a MIDI file by entering its number: "))
            if 1 <= choice <= len(midi_files):
                return midi_files[choice - 1]
            else:
                print(f"Please enter a number between 1 and {len(midi_files)}.")
        except ValueError:
            print("Invalid input. Please enter a number.")


# Assign the selected MIDI file to midiNumbersFilename
midiNumbersFilename = getMidiesSelectedByUser()


data = midi2json(midiNumbersFilename, True)


def main():
    while True:

        if not therIsMoreToSend():
            print("Finsihed so restarting")
            resetIndexMoreToSend()

        clearAllLEDs()
        sendCurrentData()
        print(numbersToSend)
        # input(">>> Hit Enter To Send")
        while True:
            midiEvent = midiin.getMessage()
            if midiEvent:
                isNote = midiEvent.isController() is False
                if isNote:
                    midiNote = midiEvent
                    midiNumber = midiNote.getNoteNumber()
                    isPressed = midiNote.isNoteOn()
                    print(midiNumber, isPressed)

                    offsetMidiNumber = midiNumber + OFFSET - GLOBAL_OFFSET

                    if isPressed:
                        if offsetMidiNumber not in midiNumbersPressed:
                            midiNumbersPressed.append(offsetMidiNumber)
                            # numberToSend = round(midiNumber * 1.95) - 58

                            print(f"should send: {offsetMidiNumber}")

                    else:
                        if offsetMidiNumber in midiNumbersPressed:
                            midiNumbersPressed.remove(offsetMidiNumber)
                            print(f"should remove: {offsetMidiNumber}")

                            # arduino.write(bytes([numberToSend]))

                    print(midiNumbersPressed)
                    if set(numbersToSend).issubset(set(midiNumbersPressed)):
                        print("MATCH")
                        break

                    # if set(midiNumbersPressed) == set(numbersToSend):
                    #     print("MATCH")
                    #     break


dataIndex = 0
numberIndex = 0
CLEAR_ALL_LEDs = b"\x00"
SEND_AGAIN = b"\x00"
SEND_NEXT = b"\x01"
RECEIVED_COMMAND = b"\x02"


def resetIndexMoreToSend():
    global dataIndex
    global numberIndex
    dataIndex = 0
    numberIndex = 0


def therIsMoreToSend():
    return dataIndex < len(data)


def setNumbersToSend():
    global numbersToSend
    global dataIndex
    numbersToSend = data[dataIndex]
    print("################## setNumbersToSend", numbersToSend, "#################################")
    dataIndex += 1


def therAreMoreNumbersToSend():
    return numberIndex < len(numbersToSend)


def sendCurrentData():
    global numberIndex
    numberIndex = 0
    setNumbersToSend()
    while therAreMoreNumbersToSend():
        sendNumber()
        receiveData()
        time.sleep(0.1)


def receiveData():
    if arduino.in_waiting > 0:
        request = arduino.read()
        if request == SEND_NEXT:
            print("SEND_NEXT")
            setupNext()

        elif request == RECEIVED_COMMAND:
            print("RECEIVED_COMMAND")


def setupNext():
    global numberIndex
    numberIndex += 1


def sendNumber():
    numberToSend = numbersToSend[numberIndex]
    numberToSend = round(numberToSend * 1.95) - 32 + GLOBAL_OFFSET
    arduino.write(bytes([numberToSend]))
    print(f"Sent: {numberToSend}")


def clearAllLEDs():
    arduino.write(CLEAR_ALL_LEDs)
    print(f"CLEAR_ALL_LEDs")


if __name__ == "__main__":
    main()

##############
##############
##############
##############
##############
