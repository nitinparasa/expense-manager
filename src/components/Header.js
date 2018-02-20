import React from 'react';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import {connect} from 'react-redux';


export const Header = ({ startLogout }) =>(
    <header className="header"> 
        <div className="content-container">
            <div className="header__content">
                <Link to="/dashboard" className="header__title">
                    <h2>Expense Manager</h2>
                </Link>
                <button className="button button__logout" onClick={startLogout}>Logout</button>
            </div>
        </div>
    </header>
);

const mapDipatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDipatchToProps)(Header);