const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./traingle.js');

function setShape(response) {

    if (response.shape === 'Circle') {
        let demoShape = new Circle (response.shapeColor, response.text, response.textColor)
        return demoShape.render()
    }

    if (response.shape === 'Square') {
        let demoShape = new Square (response.shapeColor, response.text, response.textColor)
        return demoShape.render()
    }

    if (response.shape === 'Triangle') {
        let demoShape = new Triangle (response.shapeColor, response.text, response.textColor)
        return demoShape.render()
    }
};

module.exports = setShape;