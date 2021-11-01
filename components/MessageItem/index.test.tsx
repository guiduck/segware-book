import React from 'react';
import { shallow } from "enzyme";
import MessageItem from "./index";

describe('MessageItem', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(
    <MessageItem
      username="user"
      content="content"
      likes={1}
      loves={2}
      date="20/10/2021"
      messageId={0}
      />
    );

    expect(wrapper.length).toBe(1);
  });

  it('Renders content', () => {
    const wrapper = shallow(
    <MessageItem
      username="user"
      content="content"
      likes={1}
      loves={2}
      date="20/10/2021"
      messageId={0}
    />);

    expect(wrapper.find('p').last().text()).toBe('content')
  });

});