import Decimal from 'decimal.js';
import {Point} from 'interfaces/Geometry';
import {distanceBetweenPoints} from 'utils';
import {under} from './under';

export function milsUnder(
  a: Decimal,
  expected: Point,
  actual: Point,
  alpha: Decimal,
  isLeft: boolean,
) {
  const c = distanceBetweenPoints(expected, actual);
  const halfAlpha = alpha.div(2);
  const cosHalfAlpha = halfAlpha.cos();
  const sinA = a.mul(cosHalfAlpha).div(c);
  const angleB = new Decimal(Math.PI).div(2).sub(halfAlpha).sub(sinA.asin());
  const b = c.mul(angleB.sin()).div(cosHalfAlpha);
  const h = b.mul(cosHalfAlpha);
  const d1 = h.div(alpha.sin());
  const d = a.add(d1);

  return under(expected, actual, h, d, isLeft);
}
