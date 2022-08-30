@namespace
class SpriteKind:
    head = SpriteKind.create()
    body = SpriteKind.create()

# body = sprites.create(img("""
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
# """), SpriteKind.body)

# head = sprites.create(img("""
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 f f f f f f 1 1 1 1 1
#     1 1 1 f f 1 1 1 1 1 1 f f 1 1 1
#     1 1 f 1 1 1 1 1 1 1 1 1 f f 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 f 1 1 1 1 1 1 1 f 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
#     1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
# """), SpriteKind.player)

pos_list = [(56, 40), (40, 40), (24, 40)]

directionX, directionY = 1, 0
timer = 0
timer1 = 0


def move():
    global directionX, directionY, timer1
    if game.runtime() - timer1 > 1000:
        for i in range(len(pos_list)-1):
            pos_list[i+1][0] = pos_list[i][0]
            pos_list[i+1][1] = pos_list[i][1]

        pos_list[0][0] += 16 * directionX
        pos_list[0][1] += 16 * directionY
        timer1 = game.runtime()
    else:
        timer1 += 1

def draw():
    sprites.destroy_all_sprites_of_kind(1)
    for i in range(len(pos_list)):
        body = sprites.create(img("""
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
                """), 1)
        body.x = pos_list[i][0]
        body.y = pos_list[i][1]

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

def update():
    input()
    move()
    draw()
    


game.on_update(update)