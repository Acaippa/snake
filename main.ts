namespace SpriteKind {
    export const head = SpriteKind.create()
    export const body = SpriteKind.create()
}

//  body = sprites.create(img("""
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//  """), SpriteKind.body)
//  head = sprites.create(img("""
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 f f f f f f 1 1 1 1 1
//      1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
//      1 1 f 1 1 1 1 1 1 1 1 1 f f 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//      1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
//  """), SpriteKind.player)
let pos_list = [[56, 40], [40, 40], [24, 40]]
let [directionX, directionY] = [1, 0]
let timer = 0
let timer1 = 0
function move() {
    
    if (game.runtime() - timer1 > 1000) {
        for (let i = 0; i < pos_list.length - 1; i++) {
            pos_list[i + 1][0] = pos_list[i][0]
            pos_list[i + 1][1] = pos_list[i][1]
        }
        pos_list[0][0] += 16 * directionX
        pos_list[0][1] += 16 * directionY
        timer1 = game.runtime()
    } else {
        timer1 += 1
    }
    
}

function draw() {
    let body: Sprite;
    sprites.destroyAllSpritesOfKind(1)
    for (let i = 0; i < pos_list.length; i++) {
        body = sprites.create(img`
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
                `, 1)
        body.x = pos_list[i][0]
        body.y = pos_list[i][1]
    }
}

function input() {
    
    if (controller.dx(100) > 0) {
        directionX = 1
        directionY = 0
    }
    
    if (controller.dx(100) < 0) {
        directionX = -1
        directionY = 0
    }
    
    if (controller.dy(100) > 0) {
        directionY = 1
        directionX = 0
    }
    
    if (controller.dy(100) < 0) {
        directionY = -1
        directionX = 0
    }
    
}

game.onUpdate(function update() {
    input()
    move()
    draw()
})
