import {Point} from '../interfaces/Geometry';

/**
 * Finds the midpoint of two given points.
 *
 * @param {Point} point1 - The first point.
 * @param {Point} point2 - The second point.
 *
 * @returns {Point} The midpoint between the two points.
 */
export function getMidpoint(point1: Point, point2: Point): Point {
  return {
    x: point1.x.add(point2.x).div(2),
    y: point1.y.add(point2.y).div(2),
  };
}
