'use strict';
var React = require('react');
module.exports = React.createClass({
        handleChange:function(e){
            var val = this.refs['field_'+this.props.id].getDOMNode().value;
            this.props.onUpdate(val);
        },
        render: function(){
            var input_field = <input type="number" {...this.props} value={this.props.inputValue} defaultValue={this.props.defaultValue || this.props.inputValue} className="form-control" ref={'field_'+this.props.id} onChange={this.handleChange} />
            var measure_field = '';
            if (this.props.measure !== ''){
                measure_field = (
                    <div className="input-group">
                        {input_field}
                        <div className="input-group-addon" dangerouslySetInnerHTML={{__html:this.props.measure}}></div>
                    </div>
                    );
            }
            else{
                measure_field = input_field;
            }
            return(
                <div className="form-group">
                    <label htmlFor={this.props.id} dangerouslySetInnerHTML={{__html:this.props.name+' (<small>'+this.props.description+'</small>)'}} title={this.props.description} />
                    {measure_field}
                </div>)
        }
    });
