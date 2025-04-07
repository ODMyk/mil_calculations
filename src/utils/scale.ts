import Decimal from 'decimal.js';

export const SCALE = 100000;

/**
 * Converts a distance in meters to a normalized distance.
 * @param meters A distance in meters.
 * @returns The normalized distance.
 */
export const metersToNormalized = (meters: Decimal): Decimal => {
  return meters.div(SCALE);
};

/**
 * Converts a normalized distance to a distance in meters.
 * @param normalized A normalized distance.
 * @returns The distance in meters.
 */
export const normalizedToMeters = (normalized: Decimal): Decimal => {
  return normalized.mul(SCALE);
};
