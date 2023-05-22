/**
 * A pure-JavaScript TOML parser library.
 *
 * @author interrrp
 * @license MIT
 */

/**
 * Parse a TOML string into a JavaScript object.
 *
 * @example
 * [user]
 * name = interrrp
 * age = 13
 *
 * => { user: { name: "interrrp", age: 13 } }
 *
 * @param {string} content The TOML string to parse.
 * @returns {object} The parsed object.
 */
function parse(content) {
  const lines = content.split("\n");
  const result = {};

  for (let line of lines) {
    line = line.trim();

    // Ignore empty lines and comments.
    if (line === "" || line.startsWith("#")) continue;

    if (line.startsWith("[")) {
      // Parse the header name.

      const headerName = parseHeaderName(line);
      result[headerName] = {};
      continue;
    }

    if (line.includes("=")) {
      // Parse the key-value pair.

      const { key, value } = parsePair(line);
      const headerName = Object.keys(result)[0];
      result[headerName][key] = value;
    }
  }

  return result;
}

/**
 * Parse a TOML header's name.
 *
 * @example
 * [user]
 * => "user"
 *
 * @param {string} header The raw header string.
 */
function parseHeaderName(header) {
  return header.slice(1, -1);
}

/**
 * Parse a TOML key-value pair.
 *
 * @example
 * name = interrrp
 * => { key: "name", value: "interrrp" }
 *
 * @param {string} line The raw key-value pair string.
 * @returns {object} The parsed key-value pair.
 */
function parsePair(line) {
  const [key, value] = line.split("=");
  const parsedValue = parseValue(value.trim());

  return { key: key.trim(), value: parsedValue };
}

/**
 * Parse a single string value into a JavaScript value safely.
 *
 * @param {string} value The value to parse.
 * @returns {any} The parsed value.
 */
function parseValue(value) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
}

module.exports = {
  parse,

  // Expose these functions for testing.
  parseHeaderName,
  parsePair,
  parseValue,
};
