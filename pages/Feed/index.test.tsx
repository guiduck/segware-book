import React from 'react';
import { shallow } from "enzyme";
import Feed from "./index";

describe('Feed component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<Feed />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders Atuhentication errror', () => {
    const wrapper = shallow(<Feed />);

    expect(wrapper.text()).toContain('You must be Authenticated');
  });

  it('Renders messageList', () => {
    const wrapper = shallow(<Feed />);

    expect(wrapper.find('MessageList'));
  });

  it('Renders messageList', () => {
    const wrapper = shallow(<Feed />);

    expect(wrapper.find('MessageForm'));
  });

});