import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddingExpenses, add_expense, remove_expense, edit_expense, set_expenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import testData from '../fixtures/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import uuid from 'uuid';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};

    testData.forEach(({ id, description, amount, note, createdAt }) => {
        expenseData[id] = { description, amount, note, createdAt };
    });

    database.ref('expenses').set(expenseData).then(() => done() );
});

test('should setup removing expenses', () => {
    const result = remove_expense({ id: '123ab'});
    expect(result).toEqual({
        id: '123ab',
        type: 'REMOVE_EXPENSE'
    });
});

test('should remove expense from database', (done)=> {
    const store = createMockStore({});
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: id
        });
        return database.ref(`expense/${id}`).once('value');
    }).then((snapshot) => {
            expect(snapshot.val()).toBeFalsy();
            done();
        });
});

test('should setup updating expenses', () => {
    const result = edit_expense('123ab', { description: 'Test Expense'});

    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123ab',
        updates:{
            description: 'Test Expense'
        }
    });
});

test('should update expense to the database', () => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Sample',
        amount: 2000,
        note:'',
        createdAt: 23300
    };
    store.dispatch(startEditExpense(expenses[1].id, expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenses[1].id,
            updates: {
                description: 'Sample',
                amount: 2000,
                note:'',
                createdAt: 23300
            }
        });
    });
});

test('should setup setting expenses', () => {
    const result = set_expenses(expenses);
    expect(result).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should setup add expense object with provided values', () => {

    const action = add_expense(testData[1]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: testData[1]
    });
});

//testing async function calls
test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
      description: 'Mouse',
      amount: 3000,
      note: 'This one is better',
      createdAt: 1000
    };
  
    store.dispatch(startAddingExpenses(expenseData)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});
  
test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0
    };
  
    store.dispatch(startAddingExpenses({})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
  
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});
 

// test('should fetch the expenses from database', (done) => {
//     const store = createMockStore({});

//     store.dispatch(startSetExpenses()).then(() =>{
//         const actions = store.getActions();

//         expect(actions[0]).toEqual({
//         type: 'SET_EXPENSES',
//         expenses
//         }); 

//         done();
//     });
// });

