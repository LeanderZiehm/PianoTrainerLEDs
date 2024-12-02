#include <FastLED.h>

#define MAX_NUMBERS_TO_SEND 5
#define LED_COUNT 144
#define LED_PIN 4

CRGB leds[LED_COUNT];
byte activeLEDs[LED_COUNT] = {0};  


byte TURN_OFF_LEDS = 0;

byte SEND_AGAIN = 0;
byte SEND_NEXT = 1;
byte RECEIVED_COMMAND = 2;

byte request = SEND_AGAIN;


bool startedReceiving = false;


void setup() {
  FastLED.addLeds<WS2812B, LED_PIN, GRB>(leds, LED_COUNT);
  FastLED.setBrightness(10);
  FastLED.setMaxPowerInVoltsAndMilliamps(4, 20); 
  Serial.begin(9600); 
}


void setLED_On(byte index){
activeLEDs[index] = 1;
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
      }else{
        leds[i] = CRGB(0, 0, 10);  
      }
    }
}



byte receiveIndex = 0;
byte receivedNumberPrev = 0;
byte receivedNumberCount[MAX_NUMBERS_TO_SEND] = {0};

void loop() {
  // while (Serial.available() == 0){}
  if(Serial.available() > 0){

  byte receivedNumber = Serial.read();

  setLED_On(receivedNumber);
  Serial.write(SEND_NEXT);

  if(receivedNumber == TURN_OFF_LEDS){
    turnLEDsOff();
    Serial.write(RECEIVED_COMMAND);
  }

  // if(receivedNumber == ){

    // request = SEND_NEXT;
  // }else{
    // byte hasReceivedThisNumberCount = receivedNumberCount[receiveIndex];

    // if()
    // receiveIndex

    // receiveMode = 0;

    // receivedNumberPrev
  // }

  }
    activateActiveLED();
    FastLED.show();
  }
  