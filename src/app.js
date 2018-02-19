// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { startSetExpenses } from '../src/actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../src/actions/filters';
import getFilteredExpenses from '../src/selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import './firebase/firebase';


const reduxStore = configureStore();

const jsx = (
    <Provider store={reduxStore}>
        <AppRouter />
    </Provider>
    
);


ReactDOM.render(<p>Fetching your expenses...</p>, document.getElementById('app'));

reduxStore.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});



