// Приземная концентрация загрязняющего вещества

'use strict';

function calcC(S1, Cmax){
    var c = S1 * Cmax;
    return c;
}

module.exports = calcC;