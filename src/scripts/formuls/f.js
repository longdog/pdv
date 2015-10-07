'use strict';

function calcF(omega0, D, H, deltaT){
    var f = (1000 * Math.pow(omega0,2) * D)/(Math.pow(H, 2)*deltaT);
    if (f && isFinite(f))
        return f;
    else
        return 0;
}

module.exports = calcF;