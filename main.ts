let angulos = 0
basic.forever(function () {
    angulos = input.compassHeading()
    if (angulos < 45) {
        basic.showString("N")
    } else if (angulos < 135) {
        basic.showString("E")
    } else if (angulos < 225) {
        basic.showString("S")
    } else if (angulos < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
})
