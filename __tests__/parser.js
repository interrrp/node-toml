/**
 * Contains basic tests for the parser.
 */

const { parse, parseHeaderName, parsePair } = require("../src/index");

test("parseHeaderName", () => {
  expect(parseHeaderName("[user]")).toBe("user");
  expect(parseHeaderName("[user.name]")).toBe("user.name");
});

test("parsePair", () => {
  expect(parsePair("name = interrrp")).toEqual({
    key: "name",
    value: "interrrp",
  });
});

test("parse", () => {
  const input = `
# This is a TOML document. Boom.
[user]
name = "interrrp"
age = 13
`;

  expect(parse(input)).toEqual({
    user: {
      name: "interrrp",
      age: 13,
    },
  });
});
