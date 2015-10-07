'use strict';

function calcXmax(F, d, H){
    var x_max = (5 - F) * d * H / 4;
    return x_max;
}

module.exports = calcXmax;