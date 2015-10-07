'use strict';
var React = require('react');
module.exports = React.createClass({

        control:{
            id: 'a_input',
            name: 'A',
            value: 200,
            description:'Район или территория РФ',
            measure:''
        },
        select:[{
                key: 250,
                area: 'Районы южнее 40&deg; с.ш., Бурятия и Читинская область'
            },
            {
                key: 200,
                area: 'Европейская территория РФ: районы южнее 50&deg; с.ш.; остальные районы Нижнего Поволжья. Азиатская территория РФ: Дальний Восток; Остальная территория сибири'
            },
            {
                key: 180,
                area: 'Европейская территория РФ и Урала от 50&deg; до 52&deg; с.ш.'
            },
            {
                key: 160,
                area: 'Европейская территория РФ и Урала севернее 52&deg; с.ш.'
            },
            {
                key: 140,
                area: 'Московская, Ивановская, Тульская, Рязанская, Владимирская, Калужская области'
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
                                return <option value={o.key} dangerouslySetInnerHTML={{__html: o.area}} />
                            })}
                        </select>
                    </div>)
        }
    });
