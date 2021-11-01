import React from 'react';
import { shallow } from "enzyme";
import ForgotPassword from "./index";

describe('AuthForm component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<ForgotPassword />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders Heading', () => {
    const wrapper = shallow(<ForgotPassword />);

    expect(wrapper.text()).toContain('user password:');
  });

  it('Renders one input', () => {
    const wrapper = shallow(<ForgotPassword />);

    expect(wrapper.find('Input')).toHaveLength(1);
  });

  it('input of prop name equals username', () => {
    const wrapper = shallow(<ForgotPassword />);

    expect(wrapper.find('Input').prop('name')).toBe('username');
  });

  it('Button is of type submit', () => {
    const wrapper = shallow(<ForgotPassword />);

    expect(wrapper.find('Button').prop('type')).toBe('submit');
  });
});