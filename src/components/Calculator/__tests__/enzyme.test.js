import React from 'react';
import { shallow } from 'enzyme';
import Calculator from '../';

let wrapper;

describe('Calculator', () => {
  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  test('display shows 0', () => {
    expect(wrapper.find('.display').text()).toBe('0');
  });

  test('appends when clicking a number', () => {
    wrapper.find('#seven').simulate('click');
    expect(wrapper.state('current')).toBe('7');
    expect(wrapper.find('.display').text()).toBe('7');

    wrapper.find('#eight').simulate('click');
    expect(wrapper.state('current')).toBe('78');
    expect(wrapper.find('.display').text()).toBe('78');
  });

  test('adds two numbers together', () => {
    wrapper.find('#nine').simulate('click');
    expect(wrapper.find('.display').text()).toBe('9');

    wrapper.find('#plus').simulate('click');

    wrapper.find('#six').simulate('click');
    expect(wrapper.find('.display').text()).toBe('6');

    wrapper.find('#equal').simulate('click');
    expect(wrapper.find('.display').text()).toBe('15');
  });

  test('subtracts two numbers', () => {
    wrapper.find('#five').simulate('click');
    expect(wrapper.find('.display').text()).toBe('5');

    wrapper.find('#minus').simulate('click');

    wrapper.find('#one').simulate('click');
    expect(wrapper.find('.display').text()).toBe('1');

    wrapper.find('#equal').simulate('click');
    expect(wrapper.find('.display').text()).toBe('4');
  });

  test('multiplies two numbers', () => {
    wrapper.find('#two').simulate('click');
    expect(wrapper.find('.display').text()).toBe('2');

    wrapper.find('#multiply').simulate('click');

    wrapper.find('#three').simulate('click');
    expect(wrapper.find('.display').text()).toBe('3');

    wrapper.find('#equal').simulate('click');
    expect(wrapper.find('.display').text()).toBe('6');
  });

  test('divides two numbers', () => {
    wrapper.find('#five').simulate('click');
    expect(wrapper.find('.display').text()).toBe('5');

    wrapper.find('#divide').simulate('click');

    wrapper.find('#two').simulate('click');
    expect(wrapper.find('.display').text()).toBe('2');

    wrapper.find('#equal').simulate('click');
    expect(wrapper.find('.display').text()).toBe('2.5');
  });

  test('clears display', () => {
    wrapper.find('#five').simulate('click');
    wrapper.find('#six').simulate('click');
    wrapper.find('#seven').simulate('click');
    expect(wrapper.find('.display').text()).toBe('567');

    wrapper.find('#clear').simulate('click');
    expect(wrapper.find('.display').text()).toBe('0');
  });

  test('builds numbers with digits', () => {
    wrapper.find('#nine').simulate('click');
    wrapper.find('#dot').simulate('click');
    wrapper.find('#one').simulate('click');
    wrapper.find('#eight').simulate('click');
    expect(wrapper.find('.display').text()).toBe('9.18');
  });

  test('transforms a number into its percent equivalent', () => {
    wrapper.find('#six').simulate('click');
    wrapper.find('#zero').simulate('click');
    wrapper.find('#percent').simulate('click');
    expect(wrapper.find('.display').text()).toBe('0.6');
  });

  test('changes a number sign', () => {
    wrapper.find('#four').simulate('click');
    wrapper.find('#sign').simulate('click');
    expect(wrapper.find('.display').text()).toBe('-4');
    wrapper.find('#sign').simulate('click');
    expect(wrapper.find('.display').text()).toBe('4');
  });
});
