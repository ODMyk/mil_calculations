// import Decimal from 'decimal.js';
// import { Point } from 'interfaces/Geometry';
// import {
//   distanceBetweenPoints,
//   getBestDirectionPoint,
//   getDirectionPoints,
//   under
// } from 'utils';

// export function metersUnder(
//   a: Decimal,
//   expected: Point,
//   actual: Point,
//   h: Decimal,
//   isLeft: boolean,
// ) {
//   const c = distanceBetweenPoints(expected, actual);
//   const point = getBestDirectionPoint(
//     expected,
//     actual,
//     getDirectionPoints(expected, actual, h),
//     isLeft,
//   );
//   const g = distanceBetweenPoints(expected, point);
//   // const g = c.pow(2).sub(h.pow(2)).sqrt();
//   const k = g.sub(a);
//   const tgHalfAlpha = k.div(h);
//   const halfAlpha = tgHalfAlpha.atan();
//   const b = Decimal.hypot(h, k);
//   const alpha = halfAlpha.mul(2);
//   const sinAlpha = alpha.sin();
//   const d1 = b.mul(halfAlpha.cos()).div(sinAlpha);
//   const d = a.add(d1);

//   return under(expected, actual, h, d, isLeft);
// }
