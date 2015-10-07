'use strict';

function calcR(U, Umax){
    var u_um = U/Umax;
    var r;
    if (u_um <= 1){
        r = 0.5 * u_um + 1.67 * Math.pow(u_um,2) - 1.34 * Math.pow(u_um,3); // 78
    }
    else{
        r = (3 * u_um) / (2 * Math.pow(u_um, 2) - u_um +2); // 79
    }
    return r;
}

module.exports = calcR;