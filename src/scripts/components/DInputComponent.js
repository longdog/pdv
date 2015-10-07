'use strict';
var React = require('react');
var InputComponent = require('./InputComponent.js');
module.exports = React.createClass({

        control:{
            id: 'd_input',
            name: 'D',
            value: 0,
            description:'Эквивалентный диаметр устья',
            measure:'м'
        },
        control_l:{
            id: 'l_input',
            name: 'L',
            value: 0,
            description:'Длина устья',
            measure:'м'
        },
        control_b:{
            id: 'b_input',
            name: 'b',
            value: 0,
            description:'Ширина устья',
            measure:'м'
        },
        getInitialState: function() {
            var state = {};
            state['lbDisabled'] = true;
            return state;
        },


        handleChange:function(e){
           this.props.onUpdate(this.control.id, event.target.value);
        },
        handleChangeLB:function(e){
            var l_val = this.refs[this.control_l.id].refs['field_'+this.control_l.id].getDOMNode().value;
            var b_val = this.refs[this.control_b.id].refs['field_'+this.control_b.id].getDOMNode().value;
            var de = l_val+b_val === 0?0:(2*l_val*b_val)/(l_val+b_val);
            this.props.onUpdate(this.control.id, de || 0);

        },
        inputD:function(){
            this.setState({'lbDisabled':true});
        },
        inputLB:function(){
            this.handleChangeLB();
            this.setState({'lbDisabled':false});
        },
        render: function(){

            return(
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="radio">
                          <label>
                            <input type="radio" name="d_radio" ref="d_radio1" defaultChecked={true} onChange={this.inputD}  />
                            Задать диаметр устья
                          </label>
                        </div>
                        <InputComponent disabled={!this.state.lbDisabled} id={this.control.id} measure={this.control.measure} name={this.control.name} inputValue={this.props.value} description={this.control.description} onUpdate={this.handleChange} />
                    </li>
                    <li className="list-group-item">
                        <div className="radio">
                          <label>
                            <input type="radio" name="d_radio" ref="d_radio1" defaultChecked={false} onChange={this.inputLB} />
                            Или длину и ширину устья
                          </label>
                        </div>
                        <InputComponent disabled={this.state.lbDisabled} id={this.control_l.id} ref={this.control_l.id} measure={this.control_l.measure} name={this.control_l.name} defaultValue="0" inputValue={null} description={this.control_l.description} onUpdate={this.handleChangeLB} />
                        <InputComponent disabled={this.state.lbDisabled} id={this.control_b.id} ref={this.control_b.id} measure={this.control_b.measure} name={this.control_b.name} defaultValue="0" inputValue={null} description={this.control_b.description} onUpdate={this.handleChangeLB} />
                    </li>
                </ul>
                )
        }
    });
