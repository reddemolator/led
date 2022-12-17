function led_walk() {
    strip.shift(1)
    strip.show()
}

function rainbow() {
    strip.showRainbow(1, 360)
    strip.show()
}

function train() {
    led_switch_2()
    for (let index = 0; index < 6; index++) {
        led_walk()
    }
}

function led_switch_2() {
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
}

function RG() {
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    for (let index2 = 0; index2 < 144; index2++) {
        strip.shift(2)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.show()
    }
}

let strip : neopixel.Strip = null
let led_count = 288
strip = neopixel.create(DigitalPin.P0, led_count, NeoPixelMode.RGB)
basic.forever(function on_forever() {
    control.waitMicros(1000000)
    RG()
    train()
    rainbow()
    led_switch_2()
})
