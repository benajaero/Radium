class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    
    length() {
        //I wish my linter supported ES6
        return Math.sqrt(x ** 2 + y ** 2)
    }
    
    static add(vec1, vec2) {
        //The order is not important here
        return new Vector(vec1.x + vec2.x, vec1.y, vec2.y)
    }
    static sub(vec1, vec2) {
        //The order is very important here The one to subtract off off goes first
        return new Vector(vec1.x - vec2.x, vec1.y - vec2.y)
    }
}

module.exports = Vector