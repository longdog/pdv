'use strict';
function calcV1(omega0, D){
    var v1 = 1.3 * Math.pow(omega0,2) * ((Math.PI * Math.pow(D,2))/4);
    if (v1 && isFinite(v1))
        return v1;
    else
        return 0;
}

module.exports = calcV1;