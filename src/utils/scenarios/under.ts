import Decimal from 'decimal.js';
import {Point} from 'interfaces/Geometry';
import {getBestDirectionPoint} from 'utils/getBestDirectionPoint';
import {getDirectionPoints} from 'utils/getDirectionPoints';
import {normalizeVector, vectorFromPoints} from 'utils/vector';

export function under(
  expected: Point,
  actual: Point,
  h: Decimal,
  d: Decimal,
  isLeft: boolean,
) {
  const points = getDirectionPoints(expected, actual, h);
  const point = getBestDirectionPoint(expected, actual, points, isLeft);
  const direction = vectorFromPoints(expected, point);
  const n = normalizeVector(direction);

  return {
    x: expected.x.add(n.x.mul(d)),
    y: expected.y.add(n.y.mul(d)),
  };
}
