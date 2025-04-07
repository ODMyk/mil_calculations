import Decimal from 'decimal.js';
import {Point} from 'interfaces/Geometry';

export function getBestDirectionPoint(
  expected: Point,
  actual: Point,
  points: Point[],
  isLeft: boolean,
) {
  if (points.length === 1) {
    return points[0];
  }
  const sorted = points.sort((a, b) =>
    Decimal.atan2(a.y.sub(expected.y), a.x.sub(expected.x))
      .add(Math.PI * 2)
      .mod(Math.PI * 2)
      .sub(
        Decimal.atan2(b.y.sub(expected.y), b.x.sub(expected.x))
          .add(Math.PI * 2)
          .mod(Math.PI * 2),
      )
      .toNumber(),
  );

  const firstVector = {
    x: sorted[0].x.sub(expected.x),
    y: sorted[0].y.sub(expected.y),
  };

  const middleVector = {
    x: expected.x.sub(actual.x),
    y: expected.y.sub(actual.y),
  };

  const isFirstTurnRight = firstVector.x
    .mul(middleVector.y)
    .sub(firstVector.y.mul(middleVector.x))
    .gt(0);

  return isLeft !== isFirstTurnRight ? sorted[0] : sorted[1];
}
