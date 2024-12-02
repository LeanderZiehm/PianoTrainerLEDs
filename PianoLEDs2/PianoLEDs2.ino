#include <FastLED.h>

#define LED_COUNT 144
#define LED_PIN 4

CRGB leds[LED_COUNT];
byte activeLEDs[LED_COUNT] = {0};  
byte TURN_OFF_LEDS_CMD = 0;
byte NEXT_COLOR_CMD = 255;
byte SEND_AGAIN = 0;
byte SEND_NEXT = 1;
byte RECEIVED_COMMAND = 2;
byte request = SEND_AGAIN;
bool startedReceiving = false;
byte receiveIndex = 0;
byte receivedNumberPrev = 0;
byte currentColor = 1;
byte BASE_COLOR = 1;
byte NEXT_COLOR = 2;



void setup() {
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, LED_COUNT);
  FastLED.setBrightness(10);
  FastLED.setMaxPowerInVoltsAndMilliamps(4, 20); 
  Serial.begin(9600); 
}


void setLED(byte index,byte value){
activeLEDs[index] = value;
}

void turnLEDsOff(){
      for (int i = 0; i < LED_COUNT; i++) {
        activeLEDs[i] = 0;
    }
}


void activateActiveLED(){
      for (int i = 0; i < LED_COUNT; i++) {
      if (activeLEDs[i] == 0) {
        leds[i] = CRGB::Black;
      }else if(activeLEDs[i] == 1){
        leds[i] = CRGB(0, 0, 20);  
      }else if(activeLEDs[i] == 2){
        leds[i] = CRGB(5, 0, 0);
    }
}
}





void loop() {

  if(Serial.available() > 0){

  byte receivedNumber = Serial.read();

  setLED(receivedNumber,currentColor);
  Serial.write(SEND_NEXT);

   if(receivedNumber == NEXT_COLOR_CMD){
    currentColor = NEXT_COLOR;
    Serial.write(RECEIVED_COMMAND);
  }else if(receivedNumber == TURN_OFF_LEDS_CMD){
    turnLEDsOff();
    currentColor = BASE_COLOR;
    Serial.write(RECEIVED_COMMAND);
  }
  }
    activateActiveLED();
    FastLED.show();
  }
  