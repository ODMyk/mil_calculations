import Decimal from 'decimal.js';
import {
  degreesToMils,
  milsToDegrees,
  radiansToDegrees,
  radiansToMils,
  degreesToRadians,
  milsToRadians,
} from '../../src/utils/angleConvert';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('degreesToMils', () => {
  const testCases: [Decimal, Decimal][] = [
    [new Decimal('360'), new Decimal('6000')],
    [new Decimal('180'), new Decimal('3000')],
    [new Decimal('90'), new Decimal('1500')],
    [new Decimal('45'), new Decimal('750')],
  ];

  testCases.forEach(([input, expected]) => {
    it(`converts ${input} degrees to ${expected} mils`, () => {
      const actual = degreesToMils(input);
      expect(actual.toString()).toEqual(expected.toString());
    });
  });
});

describe('milsToDegrees', () => {
  const testCases: [Decimal, Decimal][] = [
    [new Decimal('6000'), new Decimal('360')],
    [new Decimal('3000'), new Decimal('180')],
    [new Decimal('1500'), new Decimal('90')],
    [new Decimal('750'), new Decimal('45')],
  ];

  testCases.forEach(([input, expected]) => {
    it(`converts ${input} mils to ${expected} degrees`, () => {
      const actual = milsToDegrees(input);
      expect(actual.toString()).toEqual(expected.toString());
    });
  });
});

describe('radiansToMils', () => {
  const testCases: [Decimal, Decimal][] = [
    [new Decimal('2').mul(Math.PI), new Decimal('6000')],
    [new Decimal('1').mul(Math.PI), new Decimal('3000')],
    [new Decimal('0.5').mul(Math.PI), new Decimal('1500')],
    [new Decimal('0.25').mul(Math.PI), new Decimal('750')],
  ];

  testCases.forEach(([input, expected]) => {
    it(`converts ${input} radians to ${expected} mils`, () => {
      const actual = radiansToMils(input);
      expect(actual.toString()).toEqual(expected.toString());
    });
  });
});

describe('milsToRadians', () => {
  const testCases: [Decimal, Decimal][] = [
    [new Decimal('6000'), new Decimal('2').mul(Math.PI)],
    [new Decimal('3000'), new Decimal('1').mul(Math.PI)],
    [new Decimal('1500'), new Decimal('0.5').mul(Math.PI)],
    [new Decimal('750'), new Decimal('0.25').mul(Math.PI)],
  ];

  testCases.forEach(([input, expected]) => {
    it(`converts ${input} mils to ${expected} radians`, () => {
      const actual = milsToRadians(input);
      expect(actual.toString()).toEqual(expected.toString());
    });
  });
});

describe('degreesToRadians', () => {
  const testCases: [Decimal, Decimal][] = [
    [new Decimal('360'), new Decimal('2').mul(Math.PI)],
    [new Decimal('180'), new Decimal('1').mul(Math.PI)],
    [new Decimal('90'), new Decimal('0.5').mul(Math.PI)],
    [new Decimal('45'), new Decimal('0.25').mul(Math.PI)],
  ];

  testCases.forEach(([input, expected]) => {
    it(`converts ${input} degrees to ${expected} radians`, () => {
      const actual = degreesToRadians(input);
      expect(actual.toString()).toEqual(expected.toString());
    });
  });
});

describe('radiansToDegrees', () => {
  const testCases: [Decimal, Decimal][] = [
    [new Decimal('2').mul(Math.PI), new Decimal('360')],
    [new Decimal('1').mul(Math.PI), new Decimal('180')],
    [new Decimal('0.5').mul(Math.PI), new Decimal('90')],
    [new Decimal('0.25').mul(Math.PI), new Decimal('45')],
  ];

  testCases.forEach(([input, expected]) => {
    it(`converts ${input} radians to ${expected} degrees`, () => {
      const actual = radiansToDegrees(input);
      expect(actual.toString()).toEqual(expected.toString());
    });
  });
});
