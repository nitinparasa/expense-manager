import expenseReducer from '../../reducers/expenses';
import testData from '../fixtures/expenses';

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual([]);
});

test('should remove expenses', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: testData[1].id
    };
    const state = expenseReducer(testData, action);
    expect(state).toEqual([ testData[0], testData[2] ]);
});

test('should not remove expenses id is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1fea'
    };
    const state = expenseReducer(testData, action);
    expect(state).toEqual([ testData[0], testData[1], testData[2] ]);
});

test('should add expenses', () => {
    const expense = {
        description: 'Expense 4',
        amount: 333,
        createdAt: 200000000,
        note: ''
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expenseReducer(testData, action);
    expect(state).toEqual([...testData, expense]);
});

test('should edit expenses', () => {
    const amount = 2532.38;
    const action = {
        type: 'EDIT_EXPENSE',
        id: testData[2].id,
        updates: {
            amount
        }
    };
    const state = expenseReducer(testData, action);
    expect(state[2].amount).toBe(amount);
});

test('should not edit expenses if id not found', () => {
    const amount = 2532.38;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '1fea',
        updates: {
            amount
        }
    };
    const state = expenseReducer(testData, action);
    expect(state[2].amount).toBe(testData[2].amount);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [testData[1]]
    };

    const state = expenseReducer(testData, action);
    expect(state).toEqual([testData[1]]);

});
