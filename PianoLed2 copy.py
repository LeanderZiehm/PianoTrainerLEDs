import serial
import time
import rtmidi
from midi2txtNumbers import process_midi_file

arduino = serial.Serial("COM5", 9600)

midiin = rtmidi.RtMidiIn()
midiin.openPort(0)

numbersToSend = []
midiNumbersPressed = []

GLOBAL_OFFSET = -25

OFFSET = -14

midiNumbersFilename = "USER_SELECT"
data = process_midi_file(midiNumbersFilename,True)

def main():
    while True:

        if not therIsMoreToSend():
            print("Finsihed so restarting")
            resetIndexMoreToSend()

        clearAllLEDs()
        sendCurrentData()
        print(numbersToSend)
        
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
                            
                            print(f"should send: {offsetMidiNumber}")

                    else:
                        if offsetMidiNumber in midiNumbersPressed:
                            midiNumbersPressed.remove(offsetMidiNumber)
                            print(f"should remove: {offsetMidiNumber}")

                    print(midiNumbersPressed)
                    if set(midiNumbersPressed) == set(numbersToSend):
                        print("MATCH")
                        break

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
    numberToSend = round(numberToSend * 1.95) - 32 + GLOBAL_OFFSET
    arduino.write(bytes([numberToSend]))
    print(f"Sent: {numberToSend}")

def clearAllLEDs():
    arduino.write(CLEAR_ALL_LEDs)
    print(f"CLEAR_ALL_LEDs")

if __name__ == "__main__":
    main()
