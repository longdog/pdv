'use strict';

function calcS11(x, Xmax, F){
    var x_xm = x/Xmax;

    if (x_xm <= 1){
        return 3 * Math.pow(x_xm, 4) - 8 * Math.pow(x_xm, 3) + 6 * Math.pow(x_xm, 2); // 99
    }
    else if (x_xm <= 8){
        return 1.1 / (0.1 * Math.pow(x_xm,2) + 1); // 101
    }
    else if (x_xm <= 24){
        return 2.55 / (0.13 * Math.pow(x_xm,2) + 9); // 103
    }
    else if (x_xm <= 80){
        if (F <= 1.5){
            return x_xm / (4.75 * Math.pow(x_xm, 2) - 140 * x_xm + 1435); // 106
        }
        else{
            return 2.26 / (0.1 * Math.pow(x_xm,2) + 7.41 * x_xm - 160); // 107
        }
    }
    else if(F <= 1.5){
        return x_xm / (3.58 * Math.pow(x_xm,2) - 35.2 * x_xm +120); // 109
    }
    else{
        return 1 / (0.1 * Math.pow(x_xm, 2) + 2.47 * x_xm - 178); // 110
    }
}

module.exports = calcS11;