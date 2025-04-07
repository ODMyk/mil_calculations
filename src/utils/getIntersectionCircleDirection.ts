import {Circle, Point} from 'interfaces/Geometry';
import {normalizeVector, vectorFromPoints} from './vector';

/**
 * Finds the intersection points of a ray and a circle,
 * where the ray's direction is given by the two points
 * `begin` and `end`.
 *
 * @param {Circle} circle - The circle to intersect with.
 * @param {Point} begin - The starting point of the ray.
 * @param {Point} end - The ending point of the ray.
 *
 * @returns {Point[]} The points of intersection (0, 1, or 2).
 */
export function getIntersectionCircleDirection(
  circle: Circle,
  begin: Point,
  end: Point,
): Point[] {
  const {x: dx, y: dy} = normalizeVector(vectorFromPoints(begin, end));

  const fx = begin.x.sub(circle.center.x);
  const fy = begin.y.sub(circle.center.y);

  const b = fx.mul(dx).add(fy.mul(dy)).mul(2);
  const c = fx.pow(2).add(fy.pow(2)).sub(circle.radius.pow(2));

  const discriminant = b.pow(2).sub(c.mul(4));

  const sqrtD = discriminant.sqrt();
  const t1 = b.neg().sub(sqrtD).div(2);
  const t2 = b.neg().add(sqrtD).div(2);

  const ts = [t1, t2].filter(t => t.gte(0));

  return ts.map(t => ({
    x: begin.x.add(dx.mul(t)),
    y: begin.y.add(dy.mul(t)),
  }));
}
