let dice = 0
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    
    dice = randint(1, 5)
    basic.showNumber(dice)
})
basic.forever(function on_forever() {
    
})
