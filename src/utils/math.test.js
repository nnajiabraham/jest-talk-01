import { add, minus, times, divide, percent } from './math';

describe('Math utils', () => {
  describe('add function', () => {
    test('that two positive numbers output correctly', () => {
      expect(add(1,2)).toEqual(3);
    });

    test('that it returns properly when one of parameters is 0', () => {
      expect(add(-7,0)).toEqual(-7);
      expect(add(0,2)).toEqual(2);
    });

    test('that two negative numbers output correctly', () => {
      expect(add(-1, -12)).toEqual(-13);
    });
  });

  describe('minus function', () => {
    test('that two positive numbers output correctly', () => {
      expect(minus(5,2)).toEqual(3);
      expect(minus(1,2)).toEqual(-1);
    });

    test('that it returns properly when one of parameters is 0', () => {
      expect(minus(1,0)).toEqual(1);
      expect(minus(-7,0)).toEqual(-7);
      expect(minus(0,2)).toEqual(-2);
      expect(minus(0,-2)).toEqual(2);
    });

    test('that two negative numbers output correctly', () => {
      expect(minus(-1, -12)).toEqual(11);
    });
  });

  describe('times function', () => {
    test('that two positive numbers output correctly', () => {
      expect(times(5,2)).toEqual(10);
      expect(times(1,2)).toEqual(2);
    });

    test('that it returns properly when one of parameters is 0', () => {
      expect(times(-7,0)).toEqual(0);
      expect(times(0,2)).toEqual(0);
    });

    test('that two negative numbers output correctly', () => {
      expect(times(-1, -12)).toEqual(12);
      expect(times(-5, -12)).toEqual(60);
    });
  });

  describe('divide function', () => {
    test('that two positive numbers output correctly', () => {
      expect(divide(5,2)).toEqual(2.5);
      expect(divide(2,2)).toEqual(1);
    });

    test('that it returns properly when one of parameters is 0', () => {
      expect(times(7,0)).toEqual(0);
      expect(times(-7,0)).toEqual(0);
      expect(divide(0,2)).toEqual(0);
    });

    test('that two negative numbers output correctly', () => {
      expect(divide(-12, -6)).toEqual(2);
      expect(divide(-5, -1)).toEqual(5);
    });
  });

  describe('percent function', () => {
    test('that percent returns number divided by 100', () => {
      expect(percent(-10)).toEqual(-0.1);
      expect(percent(0)).toEqual(0);
      expect(percent(5)).toEqual(0.05);
    });
  });
});