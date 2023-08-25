const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./traingle.js');

function setShape(response) {

    if (response.shape === 'Circle') {
        let demoShape =Circle(response.shapeColor, response.text, response.textColor)
        return demoShape
    }

    if (response.shape === 'Square') {
        let demoShape =Square(response.shapeColor, response.text, response.textColor)
        return demoShape
    }

    if (response.shape === 'Triangle') {
        let demoShape = Triangle(response.shapeColor, response.text, response.textColor)
        return demoShape
    }
};

module.exports = setShape;