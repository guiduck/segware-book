import React from 'react';
import { shallow } from "enzyme";
import MessageForm from "./index";

describe('MessageForm', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<MessageForm />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders one Heading', () => {
    const wrapper = shallow(<MessageForm />);

    expect(wrapper.find('Heading')).toHaveLength(1);
  });

});