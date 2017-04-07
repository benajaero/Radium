module.exports = class Convert {
    constructor() {}
    static toDegrees (angle) {
        return angle * (180 / Math.PI);
    }
    static toRadians (angle) {
        return angle * (Math.PI / 180);
    }
}