import {add_expense, remove_expense, edit_expense } from '../../actions/expenses';
import uuid from 'uuid';

test('should setup removing expenses', () => {
    const result = remove_expense({ id: '123ab'});
    expect(result).toEqual({
        id: '123ab',
        type: 'REMOVE_EXPENSE'
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

test('should setup add expense object with provided values', () => {
    const expenseData = {
        description: 'Nov Rent',
        note: 'This was last months rent',
        amount: '2532.00',
        createdAt: 1000
    }

    const action = add_expense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            ...expenseData,
        }
    });
});

test('should setup add expense object with default values', () => {
    const action = add_expense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            createdAt: 0,
            note: '',
            amount: 0
        }
    });
});
    