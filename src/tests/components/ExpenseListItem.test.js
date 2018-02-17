import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import testData from '../fixtures/expenses';

test('should output the correct expense item', () => {
    const wrapper = shallow(<ExpenseListItem key={testData[1].id} {...testData[1]} />);
    expect(wrapper).toMatchSnapshot();
});