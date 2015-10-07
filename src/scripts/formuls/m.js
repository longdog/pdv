'use strict';

var cbrt = require('../utils/cbrt');

function calcM(f, v_max, v1_max){

    var m = [null, null]; // m[0] = m, m[1] = m'

    if (f < 100){ // 21

        // неоднозначная документация, пока пропускаем
        /*
        if (fe < f){ // 22
            f = fe; // 23
            m = 1.47/(Math.cbrt(f)); // 29
        }
        else{ // 22
            m = 1/(0.67+0.1*Math.sqrt(f)+0.34*Math.cbrt(f)); // 24
            if (v_max < 0.5){ // 25
                m1 = 2.86*m; // 26
            }
        }
        */
       m[0] = 1/(0.67+0.1*Math.sqrt(f)+0.34*cbrt(f)); // 24
       if (v_max < 0.5){ // 25
            m[1] = 2.86 * m[0]; // 26
        }

    }
    else{ // 21
        if (v1_max < 0.5){ // 28
            m[1] = 0.9; // 30
        }
        else{ // 21
            m[0] = 1.47/(cbrt(f)); // 29
        }
    }

    return m;

}

module.exports = calcM;