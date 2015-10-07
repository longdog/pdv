'use strict';
var React = require('react');
var InputComponent = require('./InputComponent.js');
module.exports = React.createClass({

        control:{
            id: 'omega0_input',
            name: 'ω<sub>0</sub>',
            value: 0,
            description:'Средняя скорость выхода газовоздушной смеси из устья источника выброса',
            measure:'м/c'
        },

        handleChange:function(e){
          this.props.onUpdate(this.control.id, event.target.value);
        },
        render: function(){

            return(
                <InputComponent id={this.control.id} ref={this.control.id} measure={this.control.measure} name={this.control.name} inputValue={this.props.value} description={this.control.description} onUpdate={this.handleChange} />
                )
        }
    });
