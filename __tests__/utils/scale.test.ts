import Decimal from 'decimal.js';
import {metersToNormalized, normalizedToMeters} from '../../src/utils/scale';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('metersToNormalized', () => {
  const testCases: [Decimal, Decimal][] = [
    [new Decimal(0), new Decimal(0)],
    [new Decimal(1), new Decimal(0.00001)],
    [new Decimal(-1), new Decimal(-0.00001)],
  ];

  testCases.forEach(([meters, expectedNormalized]) => {
    it(`converts ${meters} meters to ${expectedNormalized} normalized`, () => {
      expect(metersToNormalized(meters)).toEqual(expectedNormalized);
    });
  });
});

describe('normalizedToMeters', () => {
  const testCases: [Decimal, Decimal][] = [
    [new Decimal(0), new Decimal(0)],
    [new Decimal(0.00001), new Decimal(1)],
    [new Decimal(-0.00001), new Decimal(-1)],
  ];

  testCases.forEach(([normalized, expectedMeters]) => {
    it(`converts ${normalized} normalized to ${expectedMeters} meters`, () => {
      expect(normalizedToMeters(normalized)).toEqual(expectedMeters);
    });
  });
});
