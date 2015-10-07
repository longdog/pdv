'use strict';

var cbrt = require('../utils/cbrt');

function calcVmax(v1, deltaT, H){
    var v_max = 0.65 * cbrt((v1*deltaT)/H);
    if (v_max && isFinite(v_max))
        return v_max;
    else
        return 0;
}

module.exports = calcVmax;