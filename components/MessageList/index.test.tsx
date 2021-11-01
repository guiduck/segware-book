import React from 'react';
import { shallow } from "enzyme";
import MessageList from "./index";

describe('MessageList component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<MessageList/>);

    expect(wrapper.length).toBe(1);
  });

  it('Renders MessageItem component', () => {
    const wrapper = shallow(<MessageList/>);

    expect(wrapper.find('MessageItem'));
  });

  it('Renders one Heading', () => {
    const wrapper = shallow(<MessageList/>);

    expect(wrapper.find('Heading')).toHaveLength(1);
  });

});