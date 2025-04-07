import Decimal from 'decimal.js';
import {Point} from 'interfaces/Geometry';
import {under} from './under';
import {distanceBetweenPoints} from 'utils/vector';

export function milsOver(
  a: Decimal,
  expected: Point,
  actual: Point,
  alpha: Decimal,
  isLeft: boolean,
) {
  const c = distanceBetweenPoints(expected, actual);
  const h = c.mul(alpha.div(2).cos());
  const d = h.div(alpha.sin()).sub(a);
  return under(expected, actual, h, d, isLeft);
}
