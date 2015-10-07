'use strict';

function calcFe(v1_max){
    var fe = 800 * Math.pow(v1_max, 3);
    return fe || 0;
}

module.exports = calcFe;