const Triangle = require('../traingle.js');

describe('Triangle', () => {
    it('should return logo with user choice of shape color, text, and text color', () => {
        const triangle =Triangle('lime','EKO','aliceblue');
        const finalAns=`<svg version="2" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="lime"/><text x="100" y="185" font-size="70" text-anchor="middle" fill="aliceblue">EKO</text></svg>`
        expect(triangle).toEqual(finalAns)
      
    });
});