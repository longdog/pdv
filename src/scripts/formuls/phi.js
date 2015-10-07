'use strict';

function calcPhi(A, eta, M, H, PDK){
    var phi = (A * eta) * (M / (H * PDK));
    if (!isNaN(phi) && isFinite(phi))
        return phi;
    else
        return 0;
}

module.exports = calcPhi;