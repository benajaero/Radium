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
        //Multiplication by a scalar
        vec1.x = vec1.x * value
        vec2.y = vec2.y * value
    }
    static div(vec1, value) {
        //Division by a scalar
        vec1.x = vec1.x / value
        vec2.y = vec2.y / value
    }
    
    static normalize(vec1) {
        /*Pretty simply stuff. We want to change our magnitude to 1. 
        To get any number to one you divide it by itself. It is inversely proportial to 1
        If we divide the hypotenuse by a specific amount the sides are divided by the same amount. */
        length = vec1.length()
        vec1.x = vec1.x / length()
        vec1.y = vec1.y / length()
    }
}

module.exports = Vector