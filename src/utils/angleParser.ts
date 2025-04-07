import Decimal from 'decimal.js';

export const parseAngle = (angle: string): Decimal => {
  const mult = angle.startsWith('-') ? -1 : 1;
  const digits = angle.replaceAll('-', '');
  return new Decimal(digits).mul(mult);
};
