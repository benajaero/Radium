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
        vec1.x += vec2.x
        vec1.y += vec2.y
    }
    static sub(vec1, vec2) {
        //The order is very important here The one to subtract off off goes first
        vec1.x -= vec2.x
        vec1.y -= vec2.y
    }
    static mult(vec1, value) {
        vec1.x = vec1.x * value
        vec2.y = vec2.y * value
    }
    static div(vec1, value) {
        vec1.x = vec1.x / value
        vec2.y = vec2.y / value
    }
    
    
    
    
    static normalize(vec1) {
        
    }
}

module.exports = Vector