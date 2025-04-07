import Decimal from 'decimal.js';
import {Circle, Point} from 'interfaces/Geometry';

/**
 * Finds the intersection points of two given circles.
 *
 * @param {Circle} circle1 - The first circle.
 * @param {Circle} circle2 - The second circle.
 *
 * @returns {Point[]} The points of intersection (0, 1, or 2).
 *                    If the circles are identical, throws.
 *                    If the circles do not intersect, returns an empty array.
 */
export function getCircleIntersections(
  circle1: Circle,
  circle2: Circle,
): Point[] | null {
  const x1 = circle1.center.x,
    y1 = circle1.center.y,
    r1 = circle1.radius;
  const x2 = circle2.center.x,
    y2 = circle2.center.y,
    r2 = circle2.radius;

  if (x1.equals(x2) && y1.equals(y2) && r1.equals(r2)) {
    throw new Error('Identical circles');
  }

  const dx = x2.sub(x1);
  const dy = y2.sub(y1);
  const d2 = dx.pow(2).add(dy.pow(2)); // Squared distance between centers
  const r1r1 = r1.pow(2),
    r2r2 = r2.pow(2);

  if (
    d2.gt(r1r1.add(r2r2).add(r1.mul(r2).mul(2))) ||
    d2.lt(r1r1.add(r2r2).sub(r1.mul(r2).mul(2)))
  ) {
    return []; // No intersection
  }

  const d = d2.sqrt();
  const invD = new Decimal(1).div(d); // Precompute 1/d to reduce divisions
  const a = r1r1.sub(r2r2).add(d2).div(2).mul(invD); // Midpoint along the center line

  const xm = x1.add(a.mul(dx).mul(invD));
  const ym = y1.add(a.mul(dy).mul(invD));

  const h2 = r1r1.sub(a.pow(2)); // Squared height of intersection triangle
  if (h2.eq(0)) {
    return [{x: xm, y: ym}]; // Tangential case (one point)
  }

  const h = h2.sqrt();
  const offsetX = h.mul(dy).mul(invD);
  const offsetY = h.mul(dx).mul(invD);

  return [
    {x: xm.add(offsetX), y: ym.sub(offsetY)},
    {x: xm.sub(offsetX), y: ym.add(offsetY)},
  ];
}
