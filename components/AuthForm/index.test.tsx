import React from 'react';
import { shallow } from "enzyme";
import AuthForm from "./index";

describe('AuthForm component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<AuthForm hasAccount={true} />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders Heading', () => {
    const wrapper = shallow(<AuthForm hasAccount={true} />);

    expect(wrapper.text()).toContain('Login or create an account');
  });

  it('Renders two inputs', () => {
    const wrapper = shallow(<AuthForm hasAccount={true} />);

    expect(wrapper.find('Input')).toHaveLength(2);
  });

  it('First input is username', () => {
    const wrapper = shallow(<AuthForm hasAccount={true} />);

    expect(wrapper.find('Input').first().prop('name')).toBe('username');
  });

  it('Second input is password', () => {
    const wrapper = shallow(<AuthForm hasAccount={true} />);

    expect(wrapper.find('Input').last().prop('name')).toBe('password');
  });
});