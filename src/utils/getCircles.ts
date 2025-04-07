import Decimal from 'decimal.js';

import {Circle, Point} from '../interfaces/Geometry';
import {getMidpoint} from './getMidpoint';

/**
 * Finds two possible circles passing through two given points (A and B),
 * such that a third point (C) on the circle forms the given angle ∠ACB.
 *
 * @param {Point} point1 - point A.
 * @param {Point} point2 - point B.
 * @param {Decimal} alpha - The angle (in radians) subtended by the arc at the third point C.
 *
 * @returns {Circle[]}
 *          Up to two possible circles, or `null` if no valid circles exist.
 *
 * @throws {Error} If the angle is invalid (zero or 180 degrees).
 */
export function getCircles(
  point1: Point,
  point2: Point,
  alpha: Decimal,
): Circle[] {
  if (alpha.equals(0) || alpha.equals(Math.PI)) {
    throw new Error('Invalid angle');
  }

  const midPoint = getMidpoint(point1, point2);

  const mx = point2.x.sub(point1.x);
  const my = point2.y.sub(point1.y);

  const lineLength = mx.pow(2).add(my.pow(2)).sqrt();

  const radius = lineLength.div(alpha.sin()).div(2);

  if (alpha.eq(new Decimal(Math.PI).div(2))) {
    return [
      {
        center: midPoint,
        radius,
      },
    ];
  }

  const d1 = {
    x: my.div(lineLength),
    y: mx.div(-lineLength),
  };

  const d2 = {
    x: my.div(-lineLength),
    y: mx.div(lineLength),
  };

  const distanceFromCenterToMidpoint = radius
    .pow(2)
    .sub(lineLength.div(2).pow(2))
    .sqrt();

  const c1 = {
    x: midPoint.x.add(d1.x.mul(distanceFromCenterToMidpoint)),
    y: midPoint.y.add(d1.y.mul(distanceFromCenterToMidpoint)),
  };

  const c2 = {
    x: midPoint.x.add(d2.x.mul(distanceFromCenterToMidpoint)),
    y: midPoint.y.add(d2.y.mul(distanceFromCenterToMidpoint)),
  };

  return [
    {
      radius,
      center: c1,
    },
    {
      radius,
      center: c2,
    },
  ];
}
