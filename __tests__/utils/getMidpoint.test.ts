import Decimal from 'decimal.js';
import {Point} from '../../src/interfaces/Geometry';
import {getMidpoint} from '../../src/utils/getMidpoint';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('getMidpoint', () => {
  const testCases: [[Point, Point], Point][] = [
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(1), y: new Decimal(1)},
      ],
      {x: new Decimal(0.5), y: new Decimal(0.5)},
    ],
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(2), y: new Decimal(2)},
      ],
      {x: new Decimal(1), y: new Decimal(1)},
    ],
    [
      [
        {x: new Decimal(-1), y: new Decimal(-1)},
        {x: new Decimal(1), y: new Decimal(1)},
      ],
      {x: new Decimal(0), y: new Decimal(0)},
    ],
    [
      [
        {x: new Decimal(2), y: new Decimal(3)},
        {x: new Decimal(4), y: new Decimal(5)},
      ],
      {x: new Decimal(3), y: new Decimal(4)},
    ],
    [
      [
        {x: new Decimal(-2), y: new Decimal(-3)},
        {x: new Decimal(-4), y: new Decimal(-5)},
      ],
      {x: new Decimal(-3), y: new Decimal(-4)},
    ],
  ];

  testCases.forEach(([points, expectedMidpoint]) => {
    it(`calculates midpoint of ${JSON.stringify(points)}`, () => {
      expect(getMidpoint(points[0], points[1])).toEqual(expectedMidpoint);
    });
  });
});
