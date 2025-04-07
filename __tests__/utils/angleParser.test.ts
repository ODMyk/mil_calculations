import Decimal from 'decimal.js';
import {parseAngle} from '../../src/utils/angleParser';

describe('parseAngle', () => {
  const testCases: [string, Decimal][] = [
    ['32-54', new Decimal('3254')],
    ['-12-48', new Decimal('-1248')],
    ['54-75', new Decimal('5475')],
    ['35-54', new Decimal('3554')],
  ];

  testCases.forEach(([input, expected]) => {
    it(`parses ${input} to ${expected}`, () => {
      const actual = parseAngle(input.toString());
      expect(actual.toString()).toEqual(expected.toString());
    });
  });
});
