input.onButtonPressed(Button.A, function () {
    playercar.move(-1)
})
input.onButtonPressed(Button.B, function () {
    playercar.move(1)
})
let car_1: game.LedSprite = null
let side_road_right_5: game.LedSprite = null
let side_road_left_5: game.LedSprite = null
let side_road_right_4: game.LedSprite = null
let side_road_left_4: game.LedSprite = null
let side_road_right_3: game.LedSprite = null
let side_road_left_3: game.LedSprite = null
let side_road_right_2: game.LedSprite = null
let side_road_left_2: game.LedSprite = null
let side_road_right_1: game.LedSprite = null
let side_road_left_1: game.LedSprite = null
let playercar: game.LedSprite = null
game.startCountdown(500000)
game.setScore(0)
playercar = game.createSprite(2, 4)
music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Forever)
while (true) {
    basic.pause(200)
    side_road_left_1 = game.createSprite(0, 0)
    basic.pause(200)
    side_road_right_1 = game.createSprite(5, 0)
    basic.pause(200)
    side_road_left_2 = game.createSprite(0, 1)
    basic.pause(200)
    side_road_right_2 = game.createSprite(4, 1)
    basic.pause(200)
    side_road_left_3 = game.createSprite(0, 2)
    basic.pause(200)
    side_road_right_3 = game.createSprite(4, 2)
    basic.pause(200)
    side_road_left_4 = game.createSprite(0, 3)
    basic.pause(200)
    side_road_right_4 = game.createSprite(4, 3)
    basic.pause(200)
    side_road_left_5 = game.createSprite(0, 4)
    basic.pause(200)
    side_road_right_5 = game.createSprite(5, 4)
    basic.pause(randint(0, 100))
    car_1 = game.createSprite(2, 0)
    if (playercar.isTouching(side_road_left_5) || playercar.isTouching(side_road_right_5)) {
        game.gameOver()
    }
    for (let index = 0; index < 4; index++) {
        car_1.change(LedSpriteProperty.Y, 1)
        basic.pause(150)
        if (car_1.isTouching(playercar)) {
            basic.showIcon(IconNames.Skull)
            music.stopMelody(MelodyStopOptions.All)
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            basic.pause(300)
            game.gameOver()
        }
    }
    car_1.delete()
}
