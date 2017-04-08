const Map = require('./map')
const Convert = require('./util/convert.js')
const Player = require('./player')
const Vector = require('./util/vector')
const $ = require('jquery')
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

console.log("Map initialized")


$(document).ready(() => {
  var player = new Vector(22,12)
  var direction = new Vector(-1,0)
  var cameraPlane = new Vector(0,0.66)
  var c=document.getElementById("myCanvas");
  const ctx = c.getContext("2d")
  console.log("Starting...")
  
  
    console.log("Looping...")

    console.log("Updating")

    for (var x = 0; x < 512; x++) {

        var cameraX = 2 * x / 512.0 - 1
        var ray = new Vector(player.x, player.y)
        var rayDir = new Vector(Vector.mult(Vector.add(direction.x, cameraPlane.x), cameraX), Vector.mult(Vector.add(direction.y, cameraPlane.y), cameraX))

        var mapPos = new Vector(Math.floor(ray.x), Math.floor(ray.y))

        var sideDist = new Vector(0, 0)

        var deltaDist = new Vector(0, 0)
        deltaDist.x = Math.sqrt(1 + (rayDir.y * rayDir.y) / (rayDir.x * rayDir.x))
        deltaDist.y = Math.sqrt(1 + (rayDir.x * rayDir.x) / (rayDir.y * rayDir.y))

        var rayLengthDist = 0.0

        var step = new Vector(0, 0)

        var hit = 0
        var side = null

        if (rayDir.x < 0) {
            step.x = -1
            sideDist.x = (ray.x - mapPos.x) * deltaDist.x
        } else if (rayDir.x > 0) {
            step.x = 1
            sideDist.x = (mapPos.x + 1.0 - ray.x) * deltaDist.x
        }
        if (rayDir.y < 0) {
            step.y = -1
            sideDist.y = (ray.y - mapPos.y) * deltaDist.y
        } else if (rayDir.y > 0) {
            step.y = 1
            sideDist.y = (mapPos.y + 1.0 - ray.y) * deltaDist.y
        }

        while (hit == 0) {

            if (sideDist.x < sideDist.y) {
                sideDist.x += deltaDist.x
                mapPos.x += step.x
                side = 0
            } else {
                sideDist.y += deltaDist.y
                mapPos.y += step.y
                side = 1
            }

            if (map.mapArr[mapPos.x][mapPos.y]) {
                hit = 1
            }

        }

        if (side == 0) {
            rayLengthDist = (mapPos.x - ray.x + (1 - step.x) / 2) / rayDir.x
        } else {
            rayLengthDist = (mapPos.y - ray.y + (1 - step.y) / 2) / rayDir.y
        }

        console.log("Drawing...")
        var lineHeight = Math.floor(256 / rayLengthDist)
        var drawStart = (0 - lineHeight) / 2 + 256 / 2
        if (drawStart < 0) {
            drawStart = 0
        }
        var drawEnd = lineHeight / 2 + 256 / 2
        if (drawEnd >= 256) {
            drawEnd = 255
        }
        var color = "#FF0000"
        if (side == 1) color = "#ff8989"

        ctx.strokeStyle = color

        ctx.beginPath()
        ctx.moveTo(x, drawStart)
        ctx.lineTo(x, drawEnd)
        ctx.stroke()


    }
  
    
      
  
})

