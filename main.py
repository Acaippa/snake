@namespace

class SpriteKind:
    head = SpriteKind.create()
    body = SpriteKind.create()

body = sprites.create(img("""
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
        """), SpriteKind.player)

head = sprites.create(img("""
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
        """), SpriteKind.player)

body_list = []

body_list.append(body)

directionX, directionY = 1, 0
timer = 0

def move_head():
    global directionX, directionY, timer
    if game.runtime() - timer > 1000:
        head.x += 16 * directionX
        head.y += 16 * directionY
        timer = game.runtime()
    else:
        timer += 1

def input():
    global directionX, directionY

    if controller.dx(100) > 0:
        directionX = 1
        directionY = 0

    if controller.dx(100) < 0:
        directionX = -1
        directionY = 0

    if controller.dy(100) > 0:
        directionY = 1
        directionX = 0

    if controller.dy(100) < 0:
        directionY = -1
        directionX = 0

def move_body():
    global body_list
    print(body_list)

def update():
    input()
    move_head()

game.on_update(update)