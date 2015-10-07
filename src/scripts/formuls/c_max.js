'use strict';

var cbrt = require('../utils/cbrt');

function calcCmax(A, M, F, f, m, n, eta, H, V1, v1_max, v_max, deltaT, D){
    var c_max = null;

    var dt = Math.abs(Math.round(deltaT));

    var calc_c_max1 = function(A, M, F, m, n, eta, H, V1, deltaT){
        return (A * M * F * m[0] * n * eta)/(Math.pow(H,2) * cbrt(V1 * deltaT)); // 48
    };

    if (dt === 0 && f >= 100 && v1_max >= 0.5){ // 40 - уточнить порядок "около нуля" для dt; 42; 43
        var k = D/(8*V1); // 45
        c_max = (A * M * F * n * eta * k) / Math.pow(H, 4/3); // 46
        return c_max;
    }

    if(dt !== 0){
        c_max = calc_c_max1(A, M, F, m, n, eta, H, V1, deltaT);
        return c_max;
    }

    if(f < 100){
        if (v_max < 0.5){
            c_max = (A * M * F * m[1] * eta) / Math.pow(H, 7/3); // 47
            return c_max;
        }
        else{
            c_max = calc_c_max1(A, M, F, m, n, eta, H, V1, deltaT);
            return c_max;
        }
    }



}

module.exports = calcCmax;