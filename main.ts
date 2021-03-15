let strip: neopixel.Strip = null
Maqueen.IR_callbackUser(function (message) {
    if (message == 22) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    }
    if (message == 25) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    }
    if (message == 13) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    }
    if (message == 12) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    }
    if (message == 24) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    }
    if (message == 94) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    }
    if (message == 8) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    }
    if (message == 28) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (message == 30) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (message == 68) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 200)
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 0)
    }
    if (message == 67) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 0)
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 200)
    }
    if (message == 70) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 250)
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 250)
    }
    if (message == 21) {
        Maqueen.MotorRun(Maqueen.Motors.M1, Maqueen.Dir.CW, 250)
        Maqueen.MotorRun(Maqueen.Motors.M2, Maqueen.Dir.CW, 250)
    }
    if (message == 64) {
        Maqueen.MotorStop(Maqueen.Motors.All)
        basic.showIcon(IconNames.Sad)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
basic.forever(function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
})
