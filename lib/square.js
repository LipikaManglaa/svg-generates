
   function Square(shapeColor,text,textColor) {
    let finalAns=`<svg version="2" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${shapeColor}"/><text x="100" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
    return finalAns;
    
}












// const Shape = require('./shape.js')

// // child of Shape, render Circle 

// class Square extends Shape {
//     constructor(shapeColor, text, textColor) {
//         super(shapeColor, text, textColor);
//     };
//     render() {
//         return `
//         <svg version="2"
//             width="300" height="200"
//             xmlns="http://www.w3.org/2000/svg">
//             <rect width="200" height="200" fill="${this.shapeColor}"/>
//             <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
//         </svg>
//         `
//     };
// };

module.exports = Square;