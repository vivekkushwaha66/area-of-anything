/**
 * Exports class Area with list of static methods.
 */
module.exports = class Area {

    static areaOfCircle(radius) {
        return Math.PI * radius * radius;
    }

    static areaOfSquare (side) {
        return side * side;
    }
}