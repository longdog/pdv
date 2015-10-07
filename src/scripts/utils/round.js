'use strict';

module.exports = function round (x, decimals) {
    return +(Math.round(x + "e+" + decimals) + "e-" + decimals);
};