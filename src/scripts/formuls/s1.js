'use strict';

function calcS1(x, Xmax, F, H){
    var s1;
    var x_xm = x/Xmax;

    if (x_xm <= 1){
        s1 = 3 * Math.pow(x_xm, 4) - 8 * Math.pow(x_xm, 3) + 6 * Math.pow(x_xm, 2); // 86
        if ( H < 10){
            return 0.125 * (10 - H) + 0.125 * (H - 2) * s1; // 90, 91
        }
        else{
            return s1;
        }
    }
    else if (x_xm <= 8){
        return 1.13 / (0.13 * Math.pow(x_xm, 2) + 1); // 93
    }
    else if (F <= 1.5){
        return x_xm / (3.58 * Math.pow(x_xm, 2) - 35.2 * x_xm + 120); // 95
    }
    else{
        return 1 / (0.1 * Math.pow(x_xm, 2) + 2.47 * x_xm - 17.8); // 96
    }
}

module.exports = calcS1;