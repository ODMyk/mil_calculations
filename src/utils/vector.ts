import Decimal from 'decimal.js';
import {Point} from 'interfaces/Geometry';

export function vectorLength(x: Decimal, y: Decimal) {
  return x.pow(2).add(y.pow(2)).sqrt();
}

export function vectorFromPoints(point1: Point, point2: Point) {
  return {
    x: point2.x.sub(point1.x),
    y: point2.y.sub(point1.y),
  };
}

export function normalizeVector(vector: Point) {
  const length = vectorLength(vector.x, vector.y);
  return length.eq(0)
    ? {x: new Decimal(0), y: new Decimal(0)}
    : {
        x: vector.x.div(length),
        y: vector.y.div(length),
      };
}

export function distanceBetweenPoints(point1: Point, point2: Point) {
  return vectorLength(point1.x.sub(point2.x), point1.y.sub(point2.y));
}
