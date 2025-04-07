import Decimal from 'decimal.js';

export interface Point {
  x: Decimal;
  y: Decimal;
}

export interface Circle {
  center: Point;
  radius: Decimal;
}
