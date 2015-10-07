'use strict';

function calcV1max(omega0, D, H){
    var v1_max = 1.3 * omega0 * D / H;
    if (v1_max && isFinite(v1_max))
        return v1_max;
    else
        return 0;
}

module.exports = calcV1max;