import React from 'react';
import { shallow } from "enzyme";
import Home from "./index";
import AuthForm from '../components/AuthForm';

describe('Test App Entry point', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<Home/>);

    expect(wrapper.length).toBe(1);
  });

  it('Renders AuthForm', () => {
    const wrapper = shallow(<Home/>);

    expect(wrapper.find(AuthForm)).toHaveLength(1);
  });

  it('AuthForm has prop hasAccount true', () => {
    const wrapper = shallow(<Home/>);

    expect(wrapper.find(AuthForm).prop('hasAccount')).toBe(true);
  });
});