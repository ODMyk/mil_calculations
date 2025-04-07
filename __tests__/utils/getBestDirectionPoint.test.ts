import Decimal from 'decimal.js';
import {getBestDirectionPoint} from '../../src/utils';
import {Point} from '../../src/interfaces/Geometry';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('getBestDirectionPoint', () => {
  const testCases: [[Point, Point, Point[], boolean], Point][] = [
    [
      [
        {x: new Decimal(0), y: new Decimal(4)},
        {x: new Decimal(2), y: new Decimal(2)},
        [{x: new Decimal(0), y: new Decimal(2)}],
        true,
      ],
      {x: new Decimal(0), y: new Decimal(2)},
    ],
  ];

  testCases.forEach(([args, expected]) => {
    it(`returns ${expected} for ${args}`, () => {
      const actual = getBestDirectionPoint(...args);
      expect(actual).toEqual(expected);
    });
  });
});
