import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render login page correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

// testing using spies
test('should call login on button click', () => {
    const loginSpy = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={loginSpy} />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('button').simulate('click');
    expect(loginSpy).toHaveBeenCalled();
});