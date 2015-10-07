'use strict';
var React = require('react');
var calc = require('../formuls/calc.js');

module.exports = React.createClass({
    getInitialState: function(){
        return {
            A: this.props.value.a_input,
            eta: this.props.value.eta_input,
            M: this.props.value.m_input,
            PDK: this.props.value.pdk_input,
            omega0: this.props.value.omega0_input,
            D: this.props.value.d_input,
            Tg: this.props.value.tg_input,
            Tv: this.props.value.tv_input,
            F: this.props.value.f_input,
            U: this.props.value.u_input,
            U1: this.props.value.u1_input,
            x: this.props.value.x_input,
            y: this.props.value.y_input,
            H: 2,
            H_: 2,
            phi: 0
        };
    },
    componentWillReceiveProps: function(nextProps) {
        var st = {};
        if ('h_input' in nextProps.value){
            var h = Number(nextProps.value.h_input);
            st.H = h < 2 ? 2 : h;
            st.H_ = h < 10 ? 2 : h;
        }
        if ('a_input' in nextProps.value)
            st.A = Number(nextProps.value.a_input);
        if ('eta_input' in nextProps.value)
            st.eta = Number(nextProps.value.eta_input);
        if ('m_input' in nextProps.value)
            st.M = Number(nextProps.value.m_input);
        if ('pdk_input' in nextProps.value)
            st.PDK = Number(nextProps.value.pdk_input);
        if ('omega0_input' in nextProps.value)
            st.omega0 = Number(nextProps.value.omega0_input);
        if ('d_input' in nextProps.value)
            st.D = Number(nextProps.value.d_input);
        if ('tg_input' in nextProps.value)
            st.Tg = Number(nextProps.value.tg_input);
        if ('tv_input' in nextProps.value)
            st.Tv = Number(nextProps.value.tv_input);
        if ('f_input' in nextProps.value)
            st.F = Number(nextProps.value.f_input);
        if ('u_input' in nextProps.value)
            st.U = Number(nextProps.value.u_input);
        if ('u1_input' in nextProps.value)
            st.U1 = Number(nextProps.value.u1_input);
        if ('x_input' in nextProps.value)
            st.x = Number(nextProps.value.x_input);
        if ('y_input' in nextProps.value)
            st.y = Number(nextProps.value.y_input);
        this.setState(st);
    },

    render:function(){
        var phi = calc.phi(this.state.A, this.state.eta, this.state.M, this.state.H, this.state.PDK);
        if (phi <= 1){
            return(
                <span>
                Выброс незначителен. Расчет не требуется.
                </span>
                )
        }

        var dt = calc.deltaT(this.state.Tg, this.state.Tv),
            v1 = calc.v1(this.state.omega0, this.state.D),
            f = calc.f(this.state.omega0, this.state.D, this.state.H, dt),
            v_max = calc.vMax(v1, dt, this.state.H),
            v1_max = calc.v1Max(this.state.omega0, this.state.D, this.state.H),
            fe = calc.fe(v1_max);

        var m = [null, null]; // m[0] = m, m[1] = m'
        var n, v_max_tmp, c_max, d, x_max, u_max, r, c_max_u, p, x_max_u, s1, c, s11, c_max_x, f1, u_max_x, ty, s2, cy;
        m = calc.m(f, v_max, v1_max);

        if (Math.abs(Math.round(dt)) === 0 && f >= 100 && v1_max >= 0.5){ // 31 - уточнить порядок "около нуля" для dt; 32; 33
            v_max_tmp = v1_max; // 34
        }
        else{
            v_max_tmp = v_max;
        }

        n = calc.n(v_max_tmp); // 35; 36; 37; 38; 39

        c_max = calc.cMax(this.state.A, this.state.M, this.state.F, f, m, n, this.state.eta, this.state.H, v1, v1_max, v_max, dt, this.state.D);

        d = calc.d(dt, f, fe, v_max, v1_max);

        x_max = calc.xMax(this.state.F, d, this.state.H); // 61

        u_max = calc.uMax(dt, f, v_max, v1_max);

        if (this.state.U <= 0.5 || this.state.U > this.state.U1){
            return(
                <span>
                При данной скорости ветра рассчеты не производятся.
                </span>
                )
        }
        r = calc.r(this.state.U, u_max);

        c_max_u = calc.cMaxU(r, c_max);

        p = calc.p(this.state.U, u_max);

        x_max_u = calc.xMaxU(p, x_max);

        s1 = calc.s1(this.state.x, x_max, this.state.F, this.state.H);

        c = calc.c(s1, c_max);

        s11 = calc.s11(this.state.x, x_max, this.state.F);

        c_max_x = calc.cMaxX(s11, c_max);

        f1 = calc.f1(this.state.x, x_max);

        u_max_x = calc.uMaxX(f1, u_max);

        ty = calc.ty(this.state.U, this.state.y, this.state.x);

        s2 = calc.s2(ty);

        cy = calc.cy(s2, c);

        return(
                <span>
                    phi = {phi}
                    <br />
                     V1 = {v1}
                    <br />
                    deltaT = {dt}
                    <br />
                    f = {f}
                    <br />
                    Vmax = {v_max}
                    <br />
                    V1max = {v1_max}
                    <br />
                    fe = {fe}
                    <br />
                    m = {m[0]}
                    <br />
                    m1 = {m[1]}
                    <br />
                    n = {n}
                    <br />
                    Cmax = {c_max}
                    <br />
                    d = {d}
                    <br />
                    Xmax = {x_max}
                     <br />
                    Umax = {u_max}
                    <br />
                    Cmax u = {c_max_u}
                    <br />
                    Xmax u = {x_max_u}
                    <br />
                    C = {c}
                    <br />
                    Cmax x = {c_max_x}
                    <br />
                    Umax x = {u_max_x}
                    <br />
                    Cy = {cy}
                </span>
            )
    }
});