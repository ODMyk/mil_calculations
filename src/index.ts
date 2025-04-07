import Decimal from 'decimal.js';
import {
  distanceBetweenPoints,
  metersToNormalized,
  milsToRadians,
  milsUnder,
  normalizedToMeters,
  parseAngle,
} from 'utils';

// const target1 = {
//   x: new Decimal('55.92753'),
//   y: new Decimal('63.02508'),
// };

// const target2 = {
//   x: new Decimal('55.92722'),
//   y: new Decimal('63.02021'),
// };

// const target3 = {
//   x: new Decimal('55.92510'),
//   y: new Decimal('63.02623'),
// };

// const d12 = target2.x
//   .sub(target1.x)
//   .pow(2)
//   .add(target2.y.sub(target1.y).pow(2))
//   .sqrt();

// const d12m = new Decimal(488);
// const coef = d12m.div(d12);

// const expectedResult = {
//   x: new Decimal('55.88940'),
//   y: new Decimal('62.99915'),
// };

// const angle12 = '00-85';
// const angle13 = '00-49';

// const alpha12 = milsToRadians(parseAngle(angle12));
// const alpha13 = milsToRadians(parseAngle(angle13));

// const circles1 = getCircles(target1, target2, alpha12);
// const circles2 = getCircles(target1, target3, alpha13);

// const points: Point[] = [];
// circles1.forEach((c1) => {
//   circles2.forEach((c2) => {
//     getCircleIntersections(c1, c2).forEach((p) => points.push(p));
//   });
// });

// const nearestPoint = points.reduce((a, b) => {
//   const distA = a.x
//       .sub(expectedResult.x)
//       .pow(2)
//       .add(a.y.sub(expectedResult.y).pow(2)),
//     distB = b.x
//       .sub(expectedResult.x)
//       .pow(2)
//       .add(b.y.sub(expectedResult.y).pow(2));
//   return distA.lt(distB) ? a : b;
// });

// const delta = {
//   x: nearestPoint.x.sub(expectedResult.x).abs(),
//   y: nearestPoint.y.sub(expectedResult.y).abs(),
// };

// const deltaLength = delta.x.pow(2).add(delta.y.pow(2)).sqrt();
// const deltaM = deltaLength.mul(coef);

// console.log(
//   `Шукана точка:\n\tx: ${expectedResult.x}\n\ty: ${expectedResult.y}\n`,
// );
// console.log(
//   `Найближча отримана точка:\n\tx: ${nearestPoint.x}\n\ty: ${nearestPoint.y}\n`,
// );
// console.log(`Відхилення:\n\tx: ${delta.x}\n\ty: ${delta.y}\n`);
// console.log(`Відхилення (м): ${deltaM}`);

// const expected = {
//   x: new Decimal('55.80872'),
//   y: new Decimal('63.23017'),
// };

// const actual = {
//   x: new Decimal('55.80699'),
//   y: new Decimal('63.23028'),
// };

// const h = metersToNormalized(new Decimal(116));
// const a = metersToNormalized(new Decimal(127));

// const isLeft = false;
// const alpha = milsToRadians(parseAngle('00-27'));

const expected = {
  x: new Decimal('55.74690'),
  y: new Decimal('63.13450'),
};

const actual = {
  x: new Decimal('55.74489'),
  y: new Decimal('63.13579'),
};

const pos = {
  x: new Decimal('55.68293'),
  y: new Decimal('63.11790'),
};

const h = metersToNormalized(new Decimal(175));
const a = metersToNormalized(new Decimal(160));
const alpha = milsToRadians(parseAngle('00-26'));

const isLeft = false;

const probPoints = [milsUnder(a, expected, actual, alpha, isLeft)];

const deltas = probPoints.map(p => {
  const deltaLength = distanceBetweenPoints(p, pos);
  return {
    point: p,
    distance: normalizedToMeters(deltaLength),
  };
});

// const angle = radiansToMils(
//   Decimal.atan2(point.y.sub(expected.y), point.x.sub(expected.x))
//     .add(Math.PI * 2)
//     .mod(Math.PI * 2),
// );

console.log(JSON.stringify(deltas, null, 2));
