'use strict';

function calcF1(x, Xmax){

    var x_xm = x/Xmax;

    if(x_xm <= 1){
        return 1;
    }
    else if(x_xm <= 8){
        return (0.75 + 0.25 * x_xm) / (1 + (x / (x/(9 * Xmax))));
    }
    else if( x_xm < 80){
        return 0.25;
    }
    else{
        return 1;
    }
}

module.exports = calcF1;