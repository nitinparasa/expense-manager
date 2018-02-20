import React from 'react';
import {NavLink} from 'react-router-dom';
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux';


export const Header = ({ startLogout }) =>(
    <header>
        <h3>Expense Manager</h3>
        <NavLink to="/dashboard" activeClassName='isActive' exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName='isActive' exact={true}>Create Expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDipatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDipatchToProps)(Header);