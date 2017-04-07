const Map = require('./map')
const Convert = require('./util/convert.js')
const Player = require('./player')

var mapLevel = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,2,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,3,0,0,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,0,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,5,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]
var map = new Map(24, 24, mapLevel) 

var player = new Player(1,2,45)
const TILE_SIZE = 64
const playerHeight = TILE_SIZE / 2
const FOV = 60

const canvasWidth = 512
const canvasHeight = 256
const canvasDistance = (512 / 2) / Math.tan(Convert.toRadians(30))
const rayAngleDifference = FOV/canvasWidth

const c = $('#canvas')
const ctx = c.getContext("2d")


$(document).ready(() => {
  loop()
})

function start() {
    
    
    
}
function loop() {
  start()
  update()
  draw()
    
}
function update() {
    
}
function draw() {
    
}

function traceAllRays() {
  var array = []
  var cangle = FOV / 2
  for (i = 0; i < 512; i++) {
    array += traceRay(x, y, cangle)
    cangle += rayAngleDifference
  }
}
function traceRay(x, y, angle) {
  var A = new Vector()
  if (true) {
    A.y = Math.floor((player.y * 64)/TILE_SIZE) * TILE_SIZE -1
  } else {
    A.y = Math.floor((player.y * 64)/TILE_SIZE) * TILE_SIZE + TILE_SIZE
  }
  A.x = player.x + (player.y -A.y)/Math.tan(angle)
  
  if (map.mapArr[toGrid(A.x)][toGrid(A.y)] > 0) {
    return A
  } else {
    var Ya = 1
    
    if(true) {
      Ya = -64
    } else {
      Ya = 64
    }
    var Xa = TILE_SIZE/Math.tan(angle)
    var C = new Vector(A.x, A.y)
    
    for (i = 0; i <= map.mapArr.length; i++) {
      C.x = C.x + Xa
      C.y = C.y + Ya
      if (map.mapArr[toGrid(C.x)][toGrid(C.y)] > 0) {
        return C
      }
    }
    return new Vector(null, null)
  }
}

function toGrid(value) {
  return value/TILE_SIZE
}