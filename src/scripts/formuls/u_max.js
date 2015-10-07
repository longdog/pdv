'use strict';

function calcUmax(deltaT, f, v_max, v1_max){
    var dt = Math.abs(Math.round(deltaT));
    var u_max;
    if (dt !== 0 || f >= 100){
        if (v1_max <= 0.5){
            u_max = 0.5; // 65
        }
        else{
            if (v1_max <= 2){
                u_max = v1_max; // 67
            }
            else{
                u_max = 2.2 * v1_max; // 68
            }
        }
    }
    else{
        if (v_max <= 0.5){ // 69
            u_max = 0.5; // 70
        }
        else{
            if (v_max <= 2){
                u_max = v_max; // 72
            }
            else{
                u_max = v_max * (1 + 0.12 * Math.sqrt(f)); // 73
            }
        }
    }
    return u_max;
}

module.exports = calcUmax;