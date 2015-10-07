'use strict';

function calcN(v_max){
    var n = null;
    if (v_max >= 2){ // 35
        n = 1; // 36
    }
    else{
        if (v_max >= 0.5){ // 37
            n = 0.532 * Math.pow(v_max, 2) - 2.13 * v_max + 3.13;
        }
        else{
            n = 4.4 * v_max; // 39
        }
    }
    return n;
}

module.exports = calcN;