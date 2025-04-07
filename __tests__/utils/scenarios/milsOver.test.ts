import Decimal from 'decimal.js';
import {Point} from '../../../src/interfaces/Geometry';
import {
  distanceBetweenPoints,
  milsOver,
  normalizedToMeters,
} from '../../../src/utils';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('milsOver', () => {
  const testCases: [[Decimal, Point, Point, Decimal, boolean], Point][] = [
    [
      [
        new Decimal(3).mul(new Decimal(2).sqrt()).sub(4),
        {x: new Decimal(0), y: new Decimal(4)},
        {x: new Decimal(3), y: new Decimal(3)},
        new Decimal(Math.PI).div(4),
        true,
      ],
      {
        x: new Decimal(0),
        y: new Decimal(0),
      },
    ],
  ];

  testCases.forEach(([args, expected]) => {
    it(`returns ${expected} for ${args}`, () => {
      const result = milsOver(...args);
      const distance = normalizedToMeters(
        distanceBetweenPoints(result, expected),
      );
      console.log(result, distance);
      expect(distance.lessThanOrEqualTo(400)).toBeTruthy();
    });
  });
});
