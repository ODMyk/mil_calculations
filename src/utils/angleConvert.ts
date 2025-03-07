import Decimal from "decimal.js";

/**
 * Converts angular mils to radians.
 *
 * @param {Decimal} mils - Angular mils.
 * @returns {Decimal} Radians.
 */
export const milsToRadians = (mils: Decimal): Decimal => {
  return mils.mul(Math.PI).div(3000);
};

/**
 * Converts radians to angular mils.
 *
 * @param {Decimal} radians - Radians.
 * @returns {Decimal} Angular mils.
 */
export const radiansToMils = (radians: Decimal): Decimal => {
  return radians.mul(3000).div(Math.PI);
};

/**
 * Converts angular mils to degrees.
 *
 * @param {Decimal} mils - Angular mils.
 * @returns {Decimal} Degrees.
 */
export const milsToDegrees = (mils: Decimal): Decimal => {
  return mils.mul(3).div(50);
};

/**
 * Converts degrees to angular mils.
 *
 * @param {Decimal} degrees - Degrees.
 * @returns {Decimal} Angular mils.
 */
export const degreesToMils = (degrees: Decimal): Decimal => {
  return degrees.mul(50).div(3);
};

/**
 * Converts radians to degrees.
 *
 * @param {Decimal} radians - Radians.
 * @returns {Decimal} Degrees.
 */
export const radiansToDegrees = (radians: Decimal): Decimal => {
  return radians.mul(180).div(Math.PI);
};

/**
 * Converts degrees to radians.
 *
 * @param {Decimal} degrees - Degrees.
 * @returns {Decimal} Radians.
 */
export const degreesToRadians = (degrees: Decimal): Decimal => {
  return degrees.mul(Math.PI).div(180);
};
