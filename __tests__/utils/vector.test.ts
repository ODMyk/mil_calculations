import Decimal from 'decimal.js';
import {Point} from '../../src/interfaces/Geometry';
import {
  distanceBetweenPoints,
  normalizeVector,
  vectorFromPoints,
  vectorLength,
} from '../../src/utils/vector';

beforeAll(() => {
  Decimal.set({precision: 20});
});

describe('distanceBetweenPoints', () => {
  const testCases: [[Point, Point], Decimal][] = [
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(1), y: new Decimal(1)},
      ],
      new Decimal(2).sqrt(),
    ],
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(1), y: new Decimal(0)},
      ],
      new Decimal(1),
    ],
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(0), y: new Decimal(1)},
      ],
      new Decimal(1),
    ],
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(0), y: new Decimal(0)},
      ],
      new Decimal(0),
    ],
  ];

  testCases.forEach(([points, expectedDistance]) => {
    it(`calculates distance between ${JSON.stringify(
      points[0],
    )} and ${JSON.stringify(points[1])}`, () => {
      expect(distanceBetweenPoints(...points)).toEqual(expectedDistance);
    });
  });
});

describe('vectorFromPoints', () => {
  const testCases: [[Point, Point], Point][] = [
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(1), y: new Decimal(1)},
      ],
      {x: new Decimal(1), y: new Decimal(1)},
    ],
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(1), y: new Decimal(0)},
      ],
      {x: new Decimal(1), y: new Decimal(0)},
    ],
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(0), y: new Decimal(1)},
      ],
      {x: new Decimal(0), y: new Decimal(1)},
    ],
    [
      [
        {x: new Decimal(0), y: new Decimal(0)},
        {x: new Decimal(0), y: new Decimal(0)},
      ],
      {x: new Decimal(0), y: new Decimal(0)},
    ],
  ];

  testCases.forEach(([points, expectedVector]) => {
    it(`calculates vector between ${JSON.stringify(
      points[0],
    )} and ${JSON.stringify(points[1])}`, () => {
      expect(vectorFromPoints(...points)).toEqual(expectedVector);
    });
  });
});

describe('vectorLength', () => {
  const testCases: [Point, Decimal][] = [
    [{x: new Decimal(1), y: new Decimal(1)}, new Decimal(2).sqrt()],
    [{x: new Decimal(1), y: new Decimal(0)}, new Decimal(1)],
    [{x: new Decimal(0), y: new Decimal(1)}, new Decimal(1)],
    [{x: new Decimal(0), y: new Decimal(0)}, new Decimal(0)],
  ];

  testCases.forEach(([vector, expectedLength]) => {
    it(`calculates length of vector ${JSON.stringify(vector)}`, () => {
      expect(vectorLength(vector.x, vector.y)).toEqual(expectedLength);
    });
  });
});

describe('normalizeVector', () => {
  const testCases: [Point, Point][] = [
    [
      {x: new Decimal(1), y: new Decimal(1)},
      {
        x: new Decimal(1).div(new Decimal(2).sqrt()),
        y: new Decimal(1).div(new Decimal(2).sqrt()),
      },
    ],
    [
      {x: new Decimal(1), y: new Decimal(0)},
      {
        x: new Decimal(1),
        y: new Decimal(0),
      },
    ],
    [
      {x: new Decimal(0), y: new Decimal(1)},
      {
        x: new Decimal(0),
        y: new Decimal(1),
      },
    ],
    [
      {x: new Decimal(0), y: new Decimal(0)},
      {
        x: new Decimal(0),
        y: new Decimal(0),
      },
    ],
  ];

  testCases.forEach(([vector, expectedNormalizedVector]) => {
    it(`normalizes vector ${JSON.stringify(vector)}`, () => {
      expect(normalizeVector(vector)).toEqual(expectedNormalizedVector);
    });
  });
});
