'use strict';

var cbrt = require('../utils/cbrt');

function calcD(deltaT, f, fe, v_max, v1_max){
    var dt = Math.abs(Math.round(deltaT));
    var d;
    if (dt !== 0 || f >= 100){
        if (v1_max <= 0.5){
            d = 5.7; // 52
        }
        else{
            if (v1_max <= 2){
                d = 11.4 * v1_max; // 54
            }
            else{
                d = 16 * Math.sqrt(v1_max); // 55
            }
        }
    }
    else{ // 50
        if (v1_max <= 0.5){ // 56
            d = 2.48 * (1 + 0.28 * cbrt(fe)); // 57
        }
        else{
            if (v1_max <= 2){
                d = 4.95 * v_max * (1 + 0.28 * cbrt(f)); // 59
            }
            else{
                d = 7 * Math.sqrt(v_max) * (1 + 0.28 * cbrt(f)); // 60 вопрос
            }
        }
    }
    //var x_max = (5 - F) * d * H / 4;
    return d;
}

module.exports = calcD;