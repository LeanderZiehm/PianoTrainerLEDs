import serial
import time

arduino = serial.Serial("COM5", 9600)
data = [[43], [59, 62, 66], [38], [57, 61, 66], [43], [59, 62, 66], [38], [57, 61, 66], [43], [78, 59, 62, 66]]
dataIndex = 0
LEDIndex = 0

hasToShowPreview = True

CLEAR_ALL_LEDs = b"\x00"
SEND_NEXT_RESPOSE = b"\x01"
NEXT_COLOR_RESPOSE = b"\xFF"


def sendCommand(command):
    while True:
        arduino.write(command)
        if arduino.in_waiting > 0:
            response = arduino.read()
            if response:
                print("RECEIVED COMMAND", "CLEAR_ALL_LEDs" if command == CLEAR_ALL_LEDs else "NEXT_COLOR_RESPOSE")
                break


while True:
    currentLEDs = data[dataIndex]
    currentLED = currentLEDs[LEDIndex]
    # print("Data", dataIndex, "LED", LEDIndex, "Value", currentLED)
    # print("Sending LED", currentLED)
    arduino.write(bytes([currentLED]))
    if arduino.in_waiting > 0:
        response = arduino.read()
        print("response", response)
        if response == SEND_NEXT_RESPOSE:
            time.sleep(0.01)
            LEDIndex += 1
            if LEDIndex >= len(currentLEDs):
                LEDIndex = 0
                dataIndex += 1
                # print("Next data set")
                if dataIndex >= len(data):
                    dataIndex = 0

                if hasToShowPreview:
                    hasToShowPreview = False
                    # arduino.write(NEXT_COLOR_RESPOSE)
                    sendCommand(NEXT_COLOR_RESPOSE)

                else:
                    dataIndex -= 1
                    hasToShowPreview = True
                    input("Press Enter to continue")
                    sendCommand(CLEAR_ALL_LEDs)
                    # arduino.write(NEXT_COLOR_RESPOSE)
