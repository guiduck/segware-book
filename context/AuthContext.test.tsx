import React from 'react';
import { shallow } from "enzyme";
import { AuthContext } from "./AuthContext";

describe('AuthContext component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<AuthContext.Provider value={null}><div>child</div></AuthContext.Provider> );

    expect(wrapper.length).toBe(1);
  });

});