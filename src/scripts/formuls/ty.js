'use strict';

function calcTy(U, y, x){
    if (U <= 5){
        return U * Math.pow(y,2) / Math.pow(x, 2);
    }
    else{
        return 5 * Math.pow(y,2) / Math.pow(x,2);
    }
}

module.exports = calcTy;