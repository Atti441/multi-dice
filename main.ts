let dice = 0
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 G A E F C D C ", 190), music.PlaybackMode.UntilDone)
    dice = randint(1, 5)
    basic.showNumber(dice)
    basic.showIcon(IconNames.Yes)
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
