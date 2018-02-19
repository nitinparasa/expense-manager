import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage} from '../../components/AddExpensePage';
import testData from '../fixtures/expenses';

let startAddingExpenses, history, wrapper;

beforeEach(() => {
    startAddingExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage startAddingExpenses={startAddingExpenses} history={history}/>);
});

test('should render add expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(testData[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddingExpenses).toHaveBeenLastCalledWith(testData[1]);
});