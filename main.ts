controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ....................8a8aa8a8....................
        .................aaa888aa8a8aaa.................
        ..............aaa8aa8a8aa888aa8aaa..............
        ...........8aa8aa8888a8aa8a8888aa8aa8...........
        ........8888aa8aa8aa8a8aa8a8aa8aa8aa8888........
        .....aaa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aaa.....
        ...aa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aa...
        dccaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aaccd
        bcb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bcb
        dbbaa8aa8888aa8aa8888a8aa8a8888aa8aa8888aa8aabbd
        dbbaa8aa8aa8aa8888aa8a8aa8a8aa8888aa8aa8aa8aabbd
        dccaa8888aa8aa8aa8aa888aa888aa8aa8aa8aa8888aaccd
        bcbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabcb
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dbbaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aabbd
        dccaa8aa8aa8aa8aa8888a8aa8a8888aa8aa8aa8aa8aaccd
        bcbaa8888aa8aa8888aa888aa888aa8888aa8aa8888aabcb
        dbbaa8aa8aa8888aa8aa8a8aa8a8aa8aa8888aa8aa8aabbd
        dbb888aa8aa8aa8aa8aa8a8aa8a8aa8aa8aa8aa8aa888bbd
        dccaa8aa8888aa8aa8aa8a8aa8a8aa8aa8aa8888aa8aaccd
        bcbaa8aa8aa8aa8aa8aa888aa888aa8aa8aa8aa8aa8aabcb
        dbbaa8888aa8aa8aa888ccbbbbcc888aa8aa8aa8888aabbd
        dbbaa8aa8aa8aa888ccbbbbbbbbbbcc888aa8aa8aa8aabbd
        dcc888aa8aa888ccbbbbbccccccbbbbbcc888aa8aa888ccd
        bcbaa8aa888ccbbbbbccbddddddbccbbbbbcc888aa8aabcb
        dbbaa8aaccbbbbbccbddddddddddddbccbbbbbccaa8aabbd
        dbbaaccbbbbcccbddddddddddddddddddbcccbbbbccaabbd
        dcccbbbbcccbdddbccbbbbbbbbbbbbccbdddbcccbbbbcccd
        ccccccccbbbbbbbcbddddddddddddddbcbbbbbbbcccccccc
        bddddddddddddbcddddddddddddddddddcbddddddddddddb
        bbcbdddddddddcbd1111111111111111dbcdddddddddbcbb
        bbbcccccccccccd1bbbbbbbbbbbbbbbb1dcccccccccccbbb
        bbbbdddddddddc11beeeeeeeeeeeeeeb11cdddddddddbbbb
        bbb8aaaaaaa8dc1be3b33b33b33b33beb1cd8aaaaaaa8bbb
        bbb888888888dc1be3b33b33b33b33beb1cd888888888bbb
        bbb833333338dcbbf3b3effffffe33bebbcd833333338bbb
        bbb83ff3ff38dcbbf3bffffffffff3bebbcd83ff3ff38bbb
        bbb83cc3cc38dcbbf3effffffffffebebbcd83cc3cc38bbb
        bbb833333338dcbbf3eeeeeeeeeeeebebbcd833333338bbb
        cbb83ff3ff38dcbbe3b33b33b33b33bebbcd83ff3ff38bbc
        cbb83cc3cc38dcbbe3b33b33b33b33bebbcd83cc3cc38bbc
        ccbbbbbbbbbbdcbbe3b33b33b33feeeebbcdbbbbbbbbbbcc
        .cbbdddddddddcbbe3b33b33b33ffffebbcdddddddddbbc.
        ..cbdbbbdbbbdcbbf3b33b33b33f33febbcdbbbdbbbdbc..
        ...cdbbbdbbbdcbbf3b33b33b33bffeebbcdbbbdbbbdc...
        ....bddddddddcbbf3b33b33b33b33bebbcddddddddb....
        .....bdbbbdddcbbf3b33b33b33b33bebbcdddbbbdb.....
        ......bcccbbbcbbe3b33b33b33b33bebbcbbbcccb......
        `, Plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(alien)
    sprites.destroy(alien, effects.rings, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(alien, effects.ashes, 500)
    info.changeLifeBy(-1)
})
let alien: Sprite = null
let projectile: Sprite = null
let Plane: Sprite = null
Plane = sprites.create(img`
    ...........................cccccccccc..........................
    .........................ccc11111111ccc........................
    ........................cc111111111111cc.......................
    .......................cc11111111111111cc......................
    ......................cc1111111111111111cc.....................
    ......................c111111111111111111c.....................
    .....................cc111111111111111111cc....................
    .....................cc1111111111111111111c....................
    .....................c11111111111111111111c....................
    ....................cc11111111111111111111cc...................
    ....................cc11111111111111111111cc...................
    ....................cc111111111111111111111c...................
    ....................cc111111111111111111111c...................
    ....................cc111111111111111111111c...................
    ....................cc111111111111bcccc1111c...................
    ....................cc11111111111111ccc1111c...................
    .....................c11bcccc1111111cc11111c...................
    .....................cb111ccc1111111111111cc...................
    .....................cb111cc11111111111111cc...................
    .....................cb1111111111111b111ccccc..................
    ....................ccbb111111111111b11cc111cc.................
    ..................ccc11bb11111b1111b111c11111cc................
    ................cccdd111bb11111bbbb111b1111111ccccc............
    ...............cc111d1111bbb11111111bb1111bb111cc1cc...........
    ..............cc1111dd11111bbbbbbbbbbb1111bb111b111cc..........
    ..............c111111d11111111d11111bbb111bb11bb1111cc.........
    .............cc111111d11111111dd1111bb1b111b11b111111c.........
    ............cc111114441111111111ddddb11bbbb111b111111c.........
    ...........cc11111145411111111111111b11111111bb111111cc........
    ..........cc111111145411111111111111bb1111111bb1111111c........
    .........ccdd111111454111111111111111bb1111111bb111111cc.......
    ........cc111d1111145441111111111111111b1111111bb111111c.......
    .......cc11111d111d45541111111111111111bb1111111bb11111c.......
    .......c111111dd1ddd45411111111111111111bb1111111bbddd1cc......
    ......cc1111bbbbbddd454111111111111111111bb11111111bddd1c......
    ......cc11bbb111bbbd4541111111111111111111bb11111111111dcc.....
    ......cc11bb111bbbbc4541111111111111111111dbc11111111111cc.....
    ......cc11b111bb111bc5411111111111111111111dcc11111111111c.....
    bbbbbbcc111111b11111bc4cc111111111111111111ddcc1111111111c.....
    dddddddcc1111b111111bb11ccbbbbbbbb111111111dddcc11111111cc.....
    ddddddddcc111b1111111bb11cdddddddbbbbbbbbbbbbbccc111111cc......
    ddddddddddcccb11111111bbccbbddddddddddddddddddddccc111ccbbbbbbb
    ddddddddddddccc11111111bc111bbbddddddddddddddddddccccccdddddddd
    dddddddddddddccc1111111cc111111bbbddddddddddddddddddddddddddddd
    ddddddddddddbb11cc1111cc111111111bddddddddddddddddddddddddddddd
    ddddddddddbb11111cccccc111111111bdddddddddddddddddddddddddddddd
    ddddddddddb11111111111111111111bddddddddddddddddddddddddddddddd
    ddddddddddbb111111111111111111bdddddddddddddddddddddddddddddddd
    ddddddddddddbb111111111111111bddddddddddddddddddddddddddddddddd
    ddddddddddddddbb111111111111bdddddddddddddddddddddddddddddddddd
    ddddddddddddddddbb111111111bddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddbb111111bdddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddbb111bddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddbbbdddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `, SpriteKind.Player)
controller.moveSprite(Plane, 200, 200)
Plane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(500, function () {
    alien = sprites.create(img`
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 b c 5 5 d 4 c . . 
        . b b b b 5 5 5 b f d d 4 4 4 b 
        . b d 5 b 5 5 b c b 4 4 4 4 b . 
        . . b 5 5 b 5 5 5 4 4 4 4 b . . 
        . . b d 5 5 b 5 5 5 5 5 5 b . . 
        . b d b 5 5 5 d 5 5 5 5 5 5 b . 
        b d d c d 5 5 b 5 5 5 5 5 5 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `, SpriteKind.Enemy)
    alien.setVelocity(-100, 0)
    alien.setPosition(135, randint(-90, 90))
})
