# TOML Parser

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

🔍 A pure JavaScript TOML parser library.

## Features

- ✨ Parse TOML strings into JavaScript objects.

- 💪 Support for key-value pairs and nested structures.

- 🔧 Handles different data types including strings, numbers, booleans, and arrays.

- 📦 Lightweight and easy to use.

## Installation

<small>Install it by source, please. `node-toml` is taken.</small>

## Example

```js
const toml = require("node-toml");

const input = `
[user]
name = "interrrp"
age = 13

[library]
name = "node-toml"
version = "1.0.0"
`;

const parsed = toml.parse(input);

// parsed should now be:
//
// {
//     user: {
//         name: "interrrp",
//         age: 13,
//     },
//
//     library: {
//         name: "node-toml",
//         version: "1.0.0",
//     },
// }
```

## License

This project goes under the [MIT license](./LICENSE).
