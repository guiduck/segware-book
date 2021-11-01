import React from 'react';
import { shallow } from "enzyme";
import Layout from "./index";

describe('Layout component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<Layout><div>child</div></Layout>);

    expect(wrapper.length).toBe(1);
  });

  it('Renders one Button', () => {
    const wrapper = shallow(<Layout><div>child</div></Layout>);

    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('Renders its children', () => {
    const wrapper = shallow(<Layout><div>child</div></Layout>);

    expect(wrapper.find('div').text()).toBe('child')
  });

});