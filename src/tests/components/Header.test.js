// react-test-renderer
import React from 'react';
import { shallow } from 'enzyme';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';
import toJson from 'enzyme-to-json';

test('should render header properly', () => {
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

// testing using spies
test('should call logout on button click', () => {
    const logoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={logoutSpy} />);
    expect(wrapper).toMatchSnapshot();

    wrapper.find('button').simulate('click');
    expect(logoutSpy).toHaveBeenCalled();
});
