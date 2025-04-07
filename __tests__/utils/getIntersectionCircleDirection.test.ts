import Decimal from 'decimal.js';
import {Circle, Point} from '../../src/interfaces/Geometry';
import {getIntersectionCircleDirection} from '../../src/utils/getIntersectionCircleDirection';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('getIntersectionCircleDirection', () => {
  const testCases: [[Circle, Point, Point], Point[]][] = [
    [
      [
        {
          center: {x: new Decimal(0), y: new Decimal(0)},
          radius: new Decimal(1),
        },
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(3), y: new Decimal(0)},
      ],
      [{x: new Decimal(1), y: new Decimal(0)}],
    ],
    [
      [
        {
          center: {x: new Decimal(0), y: new Decimal(0)},
          radius: new Decimal(1),
        },
        {x: new Decimal(1), y: new Decimal(0)},
        {x: new Decimal(-1), y: new Decimal(0)},
      ],
      [
        {x: new Decimal(1), y: new Decimal(0)},
        {x: new Decimal(-1), y: new Decimal(0)},
      ],
    ],
    [
      [
        {
          center: {x: new Decimal(0), y: new Decimal(0)},
          radius: new Decimal(1),
        },
        {x: new Decimal(0), y: new Decimal(1)},
        {x: new Decimal(0), y: new Decimal(-1)},
      ],
      [
        {x: new Decimal(0), y: new Decimal(1)},
        {x: new Decimal(0), y: new Decimal(-1)},
      ],
    ],
    [
      [
        {
          center: {x: new Decimal(0), y: new Decimal(0)},
          radius: new Decimal(1),
        },
        {x: new Decimal(0), y: new Decimal(2)},
        {x: new Decimal(0), y: new Decimal(4)},
      ],
      [],
    ],
  ];

  testCases.forEach(([args, expected]) => {
    it(`returns ${JSON.stringify(expected)} for ${JSON.stringify(
      args,
    )}`, () => {
      const result = getIntersectionCircleDirection(...args);
      result.forEach(r => {
        expect(expected).toContainEqual(r);
      });
    });
  });
});
