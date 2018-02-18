import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import testData from '../fixtures/expenses';

test('should render expenses summary for one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={234} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render expenses summary for multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={23434234234}/>);
    expect(wrapper).toMatchSnapshot();
});