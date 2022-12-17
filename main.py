def led_walk():
    strip.shift(1)
    strip.show()
def rainbow():
    strip.show_rainbow(1, 360)
    strip.show()
def train():
    led_switch_2()
    for index in range(6):
        led_walk()
def led_switch_2():
    strip.clear()
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.ORANGE))
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.INDIGO))
    strip.set_pixel_color(2, neopixel.colors(NeoPixelColors.GREEN))
    strip.set_pixel_color(3, neopixel.colors(NeoPixelColors.YELLOW))
    strip.set_pixel_color(4, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(5, neopixel.colors(NeoPixelColors.BLUE))
    strip.show()
def RG():
    strip.clear()
    strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.GREEN))
    for index2 in range(144):
        strip.shift(2)
        strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
        strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.GREEN))
        strip.show()
strip: neopixel.Strip = None
led_count = 288
strip = neopixel.create(DigitalPin.P0, led_count, NeoPixelMode.RGB)

def on_forever():
    control.wait_micros(1000000)
    RG()
    train()
    rainbow()
    led_switch_2()
basic.forever(on_forever)
