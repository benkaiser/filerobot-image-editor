import BaseFilters from './BaseFilters';

const CONTRAST_CONST = -0.15;
const SATURATION_CONST = 0.1;

/**
 * Sierra Filter.
 * @function
 * @param {Object} imageData
 * @example
 * node.cache();
 * node.filters([Sierra]);
 */
function Sierra(imageData) {
  const pixels = imageData.data; //  [0, 1, 2, 3,...] => [r, g, b, a, ...]
  const len = pixels.length;

  for (let i = 0; i < len; i += 4) {
    [pixels[i], pixels[i + 1], pixels[i + 2]] = BaseFilters.contrast(
      [pixels[i], pixels[i + 1], pixels[i + 2]],
      CONTRAST_CONST,
    );

    [pixels[i], pixels[i + 1], pixels[i + 2]] = BaseFilters.saturation(
      [pixels[i], pixels[i + 1], pixels[i + 2]],
      SATURATION_CONST,
    );
  }
}

Sierra.filterName = 'Sierra'; // We assign the filter name here instead of using the fn. name as on prod. code the fn. name is optimized that might cause bug in that case.

export default Sierra;
