namespace SpriteKind {
    export const head = SpriteKind.create()
    export const body = SpriteKind.create()
}

let body = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
            1 1 1 1 1 1 f f f 1 1 1 1 1 1 1
            1 f f f f f 1 1 1 f f f f 1 1 1
            1 f 1 1 1 1 1 1 1 1 1 1 f f 1 1
            1 1 1 1 1 1 1 1 1 1 1 1 1 f 1 1
            1 1 1 f 1 1 1 1 1 1 1 f 1 1 1 1
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
        `, SpriteKind.Player)
let head = sprites.create(img`
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
        `, SpriteKind.Player)
let body_list = []
body_list.push(body)
let [directionX, directionY] = [1, 0]
let timer = 0
function move_head() {
    
    if (game.runtime() - timer > 1000) {
        head.x += 16 * directionX
        head.y += 16 * directionY
        timer = game.runtime()
    } else {
        timer += 1
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

function move_body() {
    
    console.log(body_list)
}

game.onUpdate(function update() {
    input()
    move_head()
})
