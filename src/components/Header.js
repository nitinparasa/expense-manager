import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () =>(
    <header>
        <h3>Expense Manager</h3>
        <NavLink to="/" activeClassName='isActive' exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName='isActive' exact={true}>Create Expense</NavLink>
        <NavLink to="/help" activeClassName='isActive' exact={true}>Help</NavLink>
    </header>
);

export default Header;