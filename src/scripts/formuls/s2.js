'use strict';

function calcS2(ty){
    return 1/Math.pow((1+ 5*ty + 12.8 * Math.pow(ty, 2) + 17 * Math.pow(ty, 3) + 45.1 * Math.pow(ty, 4)),2);
}

module.exports = calcS2;