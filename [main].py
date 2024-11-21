import serial
import time
import json
import rtmidi

arduino = serial.Serial("COM5", 9600)


midiin = rtmidi.RtMidiIn()
midiin.openPort(0)


numbersToSend = []
midiNumbersPressed = []

# OFFSET_TRANSPOSE = 12
# OFFSET_BASE = 4
OFFSET = -2

# midiNumbersFilename = "C418Sweden_NotesNumbers.txt"
midiNumbersFilename = "alle_meine_entchen_NotesNumbers.txt"


def main():
    while therIsMoreToSend():
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

                    offsetMidiNumber = midiNumber + OFFSET

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
                    if set(midiNumbersPressed) == set(numbersToSend):
                        print("MATCH")
                        break

                    # numberToSend = round(midiNumber * 1.95) - 58
                    # arduino.write(bytes([numberToSend]))


def readMidiNumbersFromFile(filename):
    with open(filename, "r") as infile:
        data = infile.read()
        midi_numbers_list = json.loads(data)
    return midi_numbers_list


# data = [[3,7,4],[8,5,6],[1,4,5],[3,7,4],[8,5,6],[1,4,5],[3,7,4],[8,5,6],[1,4,5]]
# data = [range(1, 144, 1)]
data = readMidiNumbersFromFile(midiNumbersFilename)


# print(dataOG)


# def change(data):
#     result = []
#     for row in data:
#         new_row = [round(num * 1.95) - 32 for num in row]
#         result.append(new_row)
#     return result


# print(f"##########Multiplying by 2########")

# data = change(dataOG)
# print(data)


dataIndex = 0

numberIndex = 0

CLEAR_ALL_LEDs = b"\x00"

SEND_AGAIN = b"\x00"
SEND_NEXT = b"\x01"
RECEIVED_COMMAND = b"\x02"


def therIsMoreToSend():
    return dataIndex < len(data)


def setNumbersToSend():
    global numbersToSend
    global dataIndex
    numbersToSend = data[dataIndex]
    print("setNumbersToSend", numbersToSend)
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
    # new_row = [round(num * 1.95) - 32 for num in row]
    numberToSend = round(numberToSend * 1.95) - 32
    arduino.write(bytes([numberToSend]))
    print(f"Sent: {numberToSend}")


def clearAllLEDs():
    arduino.write(CLEAR_ALL_LEDs)
    print(f"CLEAR_ALL_LEDs")


if __name__ == "__main__":
    main()

##############
############
############
############
############
############
############
############
############
############
############
############
############
############
############
############
############
