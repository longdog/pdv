'use strict';

function calcP(U, Umax){
    var u_um = U/Umax;
    var p;

    if(u_um <= 0.25){
        p = 3;
    }
    else if (u_um <= 1){
        p = 8.43 * Math.pow((1 - u_um),5) + 1;
    }
    else{
        p = 0.32 * u_um + 0.68;
    }
    return p;
}

module.exports = calcP;