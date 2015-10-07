'use strict';
var React = require('react');
module.exports = React.createClass({

        control:{
            id: 'f_input',
            name: 'F',
            value: 1,
            description:'Тип вещества',
            measure:''
        },
        select:[{
                key: 1,
                gas: 'Газообразное вредное вещество и мелкодисперсный аэрозоль (пыль, зола и т.д., скорость упорядоченного оседания которого равно 0)'
            },
            {
                key: 2,
                gas: 'Мелкодисперсный аэрозоль со степенью очистки газа выше 90&#37;'
            },
            {
                key: 2.5,
                gas: 'Мелкодисперсный аэрозоль со степенью очистки газа от 75 до 90&#37;'
            },
            {
                key: 3,
                gas: 'Мелкодисперсный аэрозоль со степенью очистки менее 75&#37; и без очистки'
            }],


        handleChange:function(e){
            this.props.onUpdate(this.control.id, event.target.value);
        },
        render: function(){

            return(
                    <div className="form-group">
                        <label htmlFor={this.control.id} title={this.control.description}>
                            {this.control.description}
                        </label>
                        <select className="form-control" defaultValue={this.props.value} onChange={this.handleChange} >
                            {this.select.map(function(o){
                                return <option value={o.key} dangerouslySetInnerHTML={{__html: o.gas}} />
                            })}
                        </select>
                    </div>)
        }
    });
