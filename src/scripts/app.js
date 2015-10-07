var React = require('react');
var FormComponent = require('./FormComponent.js');
window.jQuery = window.$ = require('jquery');
require('bootstrap');
require('bootstrap.css');

Math.cbrt = Math.cbrt || function(x) {
  var y = Math.pow(Math.abs(x), 1/3);
  return x < 0 ? -y : y;
};

var c_max = function(A, M, F, m, n, η, H, V1, ΔT){
    return (A*M*F*m*n*η) / (Math.pow(H,2)*Math.cbrt(V1*ΔT));
}

var AppComponent = React.createClass({
    render:function(){
        return(
                    <FormComponent />
            )
    }
});

// React.render(<AppComponent data={c_max(1,2,3,4,5,6,7,8,9)} />, document.body);
React.render(<AppComponent />, document.body);