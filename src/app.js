// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {add_expense,remove_expense, edit_expense} from '../src/actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../src/actions/filters';
import getFilteredExpenses from '../src/selectors/expenses';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';


const reduxStore = configureStore();

const jsx = (
    <Provider store={reduxStore}>
        <AppRouter />
    </Provider>
    
);


ReactDOM.render(jsx, document.getElementById('app'));
