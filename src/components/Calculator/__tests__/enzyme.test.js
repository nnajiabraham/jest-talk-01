import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../';

let wrapper;

describe('Calculator', () => {
  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  test('that display shows 0', () => {
    const displayText = wrapper.find('.display').text();
    expect(displayText).toBe('0');
  });
});
