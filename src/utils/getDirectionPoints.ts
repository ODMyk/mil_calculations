import Decimal from 'decimal.js';
import {Point} from 'interfaces/Geometry';
import {getMidpoint} from './getMidpoint';
import {getCircles} from './getCircles';
import {getCircleIntersections} from './getCircleIntersections';

/**
 * Finds two points to go from actual to the unknown position.
 *
 * @param {Point} expected - The expected point.
 * @param {Point} actual - The actual point.
 * @param {Decimal} distance - The distance between the direction and actual.
 * @returns {Point[]} Two possible points to go from expected.
 */
export function getDirectionPoints(
  expected: Point,
  actual: Point,
  distance: Decimal,
): Point[] {
  const c1 = getMidpoint(expected, actual);
  const c2 = actual;
  const r1 = expected.x
    .sub(actual.x)
    .pow(2)
    .add(expected.y.sub(actual.y).pow(2))
    .sqrt()
    .div(2);
  const r2 = distance;
  const circle1 = {center: c1, radius: r1};
  const circle2 = {center: c2, radius: r2};

  return getCircleIntersections(circle1, circle2);
}
