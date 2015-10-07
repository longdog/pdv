'use strict';
var React = require('react');
var InputComponent = require('./InputComponent.js');
module.exports = React.createClass({

        control:{
            id: 'm_input',
            name: 'M',
            value: 0,
            description:'Масса вредного вещества, выбрасываемого в атмосферу в единицу времени',
            measure:'г/c'
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
