let x = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (x > 315 || x <= 45) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("N")
    } else if (x == 45) {
        basic.showString("NE")
    } else if (x < 135) {
        basic.showString("E")
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (x == 135) {
        basic.showString("SE")
    } else if (x < 225) {
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.showString("S")
    } else if (x == 225) {
        basic.showString("SW")
    } else if (x == 315) {
        basic.showString("NW")
    } else {
        music.playTone(349, music.beat(BeatFraction.Whole))
        basic.showString("W")
    }
    x = input.compassHeading()
})
