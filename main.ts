scene.setBackgroundColor(9)

// Crear el tilemap (suelo del nivel)
tiles.setTilemap(tiles.createTilemap(
    hex`100010000101010101010101010101010101010101000000000000000000000000000001010100000000000000000000000000000101010000000000000000000000000000010101000000000000000000000000000001010100000000000000000000000000000101010000000000000000000000000000010101000000000000000000000000000101010000000000000000000000000000010101000000000000000000000000000101010000000000000000000000000000010101000000000000000000000000000101010000000000000000000000000000010101000000000000000000000000000101010000000000000000000000000000010101000000000000000000000000000101010101010101010101010101010101`,
    img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
# # # # # # # # # # # # # # # # 
`,
    [myTiles.tile0],
    TileScale.Sixteen
))

// Crear jugador
let player = sprites.create(img`
    . . . . . f f f f . . . . . . . 
    . . . f f f 2 2 f f f . . . . . 
    . . f f f 2 2 2 2 f f f . . . . 
    . f f f e e e e e e f f f . . . 
    . f f e 2 2 2 2 2 2 e e f . . . 
    . f e 2 f f f f f f 2 e f . . . 
    . f f f f e e e e f f f f . . . 
    f f e f b f 4 4 f b f e f f . . 
    f e e 4 1 f d d f 1 4 e e f . . 
    . f e e d d d d d d e e f . . . 
    . . f e e 4 4 4 4 e e f . . . . 
    . . . f f e e e e f f . . . . . 
    . . e 4 f 2 2 2 2 f 4 e . . . . 
    . . 4 d f 2 2 2 2 f d 4 . . . . 
    . . 4 4 f 4 5 5 4 f 4 4 . . . . 
    . . . . . f f f f . . . . . . . 
`, SpriteKind.Player)

// Movimiento
controller.moveSprite(player, 100, 0)
player.ay = 300

// Cámara sigue al jugador
scene.cameraFollowSprite(player)

// Colocar al jugador en el suelo
tiles.placeOnRandomTile(player, myTiles.tile0)

