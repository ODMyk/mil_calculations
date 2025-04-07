import Decimal from 'decimal.js';
import {Circle, Point} from '../../src/interfaces/Geometry';
import {getCircleIntersections} from '../../src/utils/getCircleIntersections';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('getCircleIntersections no errors', () => {
  const testCases: [[Circle, Circle], Point[]][] = [
    [
      [
        {
          center: {x: new Decimal(0), y: new Decimal(0)},
          radius: new Decimal(1),
        },
        {
          center: {x: new Decimal(0), y: new Decimal(0)},
          radius: new Decimal(2),
        },
      ],
      [],
    ],
    [
      [
        {
          center: {x: new Decimal(0), y: new Decimal(0)},
          radius: new Decimal(1),
        },
        {
          center: {x: new Decimal(2), y: new Decimal(0)},
          radius: new Decimal(1),
        },
      ],
      [
        {
          x: new Decimal(1),
          y: new Decimal(0),
        },
      ],
    ],
    [
      [
        {
          center: {x: new Decimal(0), y: new Decimal(0)},
          radius: new Decimal(2),
        },
        {
          center: {x: new Decimal(2), y: new Decimal(2)},
          radius: new Decimal(2),
        },
      ],
      [
        {
          x: new Decimal(2),
          y: new Decimal(0),
        },
        {
          x: new Decimal(0),
          y: new Decimal(2),
        },
      ],
    ],
  ];

  testCases.forEach(([input, expected]) => {
    it(`finds the intersection points of ${JSON.stringify(
      input,
    )} to be ${JSON.stringify(expected)}`, () => {
      const actual = getCircleIntersections(...input);
      expect(actual).not.toBeNull();
      actual!.forEach(r => {
        expect(expected).toContainEqual(r);
      });
    });
  });

  it('throws if the circles are identical', () => {
    const circle: Circle = {
      center: {x: new Decimal(0), y: new Decimal(0)},
      radius: new Decimal(1),
    };
    expect(() => getCircleIntersections(circle, circle)).toThrow(
      'Identical circles',
    );
  });
});
