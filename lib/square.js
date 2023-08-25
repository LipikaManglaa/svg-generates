
   function Square(shapeColor,text,textColor) {
    let finalAns=`<svg version="2" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${shapeColor}"/><text x="100" y="125" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
    return finalAns;
    
}



module.exports = Square;