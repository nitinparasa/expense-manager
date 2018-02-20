// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from '../src/actions/expenses';
import { login, logout } from '../src/actions/auth';
import getFilteredExpenses from '../src/selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';


const reduxStore = configureStore();

const jsx = (
    <Provider store={reduxStore}>
        <AppRouter />
    </Provider>
    
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Fetching your expenses...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        reduxStore.dispatch(login(user.uid));
        reduxStore.dispatch(startSetExpenses()).then(() => {
          renderApp();
          if (history.location.pathname === '/') {
            history.push('/dashboard');
          }
        });
      } else {
        reduxStore.dispatch(logout());
        renderApp();
        history.push('/');
      }
});

