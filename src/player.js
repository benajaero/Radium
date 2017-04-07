const Vector = require('./util/vector')
module.exports = class Player extends Vector{
    constructor(x, y, angle) {
        super(x, y) 
        this.angle = angle
    }
}