import {createStore, combineReducers} from 'redux';



const expenseOne = reduxStore.dispatch(add_expense({ description: 'December Rent', amount: 2532, createdAt: -21000}));
const expenseTwo = reduxStore.dispatch(add_expense({ description: 'Petrol', amount: 3225, createdAt: -1000}));

// reduxStore.dispatch(remove_expense({ id: expenseTwo.expense.id}));

// reduxStore.dispatch(edit_expense(expenseOne.expense.id, { amount: 3225}));

// reduxStore.dispatch(setTextFilter('ped'));

// reduxStore.dispatch(setTextFilter());

// reduxStore.dispatch(sortByAmount());
// reduxStore.dispatch(sortByDate());

//  reduxStore.dispatch(setStartDate(0));
// reduxStore.dispatch(setStartDate());
// reduxStore.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 112233,
        description: 'Jan Rent',
        note: 'Final payment for the current address',
        amount: 532,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //date or amount,
        startDate: undefined,
        endDate: undefined
    }
};