'use strict';

var React = require('react');
var HInputComponent = require('./components/HInputComponent'),
    PdkInputComponent = require('./components/PdkInputComponent'),
    TgInputComponent = require('./components/TgInputComponent'),
    TvInputComponent = require('./components/TvInputComponent'),
    MInputComponent = require('./components/MInputComponent'),
    OmegaInputComponent = require('./components/OmegaInputComponent'),
    DInputComponent = require('./components/DInputComponent'),
    AInputComponent = require('./components/AInputComponent'),
    FInputComponent = require('./components/FInputComponent'),
    UInputComponent = require('./components/UInputComponent'),
    U1InputComponent = require('./components/U1InputComponent'),
    XInputComponent = require('./components/XInputComponent'),
    YInputComponent = require('./components/YInputComponent'),
    CountComponent = require('./components/CountComponent');


module.exports = React.createClass({
    getInitialState: function() {
        return {

                pdk_input:0,
                h_input:0,
                tg_input:0,
                tv_input:0,
                m_input:0,
                omega0_input:0,
                d_input:0,
                a_input:200,
                f_input: 1,
                eta_input: 1,
                u_input: 0,
                u1_input: 0,
                x_input: 0,
                y_input: 0

        };
    },
    onUpdate:function(key, value){
        var state = {};
        state[key] = value;
        this.setState(state);
    },
    render: function(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <PdkInputComponent value={this.state.pdk_input} onUpdate={this.onUpdate} />
                            <HInputComponent value={this.state.h_input} onUpdate={this.onUpdate} />
                            <TgInputComponent value={this.state.tg_input} onUpdate={this.onUpdate} />
                            <TvInputComponent value={this.state.tv_input} onUpdate={this.onUpdate} />
                            <MInputComponent value={this.state.m_input} onUpdate={this.onUpdate} />
                            <OmegaInputComponent value={this.state.omega0_input} onUpdate={this.onUpdate} />
                            <DInputComponent value={this.state.d_input} onUpdate={this.onUpdate} />
                            <AInputComponent value={this.state.a_input} onUpdate={this.onUpdate} />
                            <FInputComponent value={this.state.f_input} onUpdate={this.onUpdate} />
                            <UInputComponent value={this.state.u_input} onUpdate={this.onUpdate} />
                            <U1InputComponent value={this.state.u1_input} onUpdate={this.onUpdate} />
                            <XInputComponent value={this.state.x_input} onUpdate={this.onUpdate} />
                            <YInputComponent value={this.state.y_input} onUpdate={this.onUpdate} />
                        </form>
                    </div>
                    <div className="col-md-6">
                        <CountComponent value={this.state} />
                    </div>
                </div>
            </div>
            );
    }
});