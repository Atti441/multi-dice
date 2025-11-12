dice = 0

def on_gesture_shake():
    global dice
    dice = randint(1, 5)
    basic.show_number(dice)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    pass
basic.forever(on_forever)
