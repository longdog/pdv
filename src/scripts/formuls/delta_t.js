'use strict';
function calcDeltaT(Tg, Tv){
     var dt = Tg - Tv;
     return dt || 0;
}

module.exports = calcDeltaT;