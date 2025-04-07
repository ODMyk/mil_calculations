import Decimal from 'decimal.js';
import {milsUnder} from '../../../src/utils/scenarios';
import {distanceBetweenPoints, normalizedToMeters} from '../../../src/utils';
import {Point} from '../../../src/interfaces/Geometry';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('milsUnder', () => {
  const testCases: [[Decimal, Point, Point, Decimal, boolean], Point][] = [
    [
      [
        new Decimal(4).sub(new Decimal(2).mul(new Decimal(2).sqrt())),
        {x: new Decimal(0), y: new Decimal(4)},
        {x: new Decimal(2), y: new Decimal(2)},
        new Decimal(Math.PI).div(4),
        true,
      ],
      {
        x: new Decimal(0),
        y: new Decimal(0),
      },
    ],
    [
      [
        new Decimal(4).sub(new Decimal(2).mul(new Decimal(2).sqrt())),
        {x: new Decimal(0), y: new Decimal(4)},
        {x: new Decimal(-2), y: new Decimal(2)},
        new Decimal(Math.PI).div(4),
        false,
      ],
      {
        x: new Decimal(0),
        y: new Decimal(0),
      },
    ],
  ];

  testCases.forEach(([args, expectedResult]) => {
    it(`returns ${JSON.stringify(expectedResult)} for ${JSON.stringify(
      args,
    )}`, () => {
      const result = milsUnder(...args);
      const distance = normalizedToMeters(
        distanceBetweenPoints(result, expectedResult),
      );
      expect(distance.lessThanOrEqualTo(400)).toBeTruthy();
    });
  });
});
