import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import testData from '../fixtures/expenses';

test('should render expense list with expenses', () => {
    const wrapper  = shallow(<ExpenseList expenses = {testData}/>);
    
    expect(wrapper).toMatchSnapshot();
});

test('should render with empty message', () => {
    const wrapper  = shallow(<ExpenseList expenses = {[]}/>);
    
    expect(wrapper).toMatchSnapshot();
})
