# Unites [![Build Status](https://travis-ci.org/joseluisq/unites.svg?branch=master)](https://travis-ci.org/joseluisq/unites) [![npm](https://img.shields.io/npm/v/unites.svg)](https://www.npmjs.com/package/unites) [![npm](https://img.shields.io/npm/dt/unites.svg)](https://www.npmjs.com/package/unites) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Fast utility for calculate [SI](1) and [Binary](2) unit prefixes ([Units of information](3)). :zap:

[1]: https://en.wikipedia.org/wiki/Metric_prefix
[2]: https://en.wikipedia.org/wiki/Binary_prefix
[3]: https://en.wikipedia.org/wiki/Units_of_information

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add unites
```

[NPM](https://www.npmjs.com/)

```sh
npm install unites
```

[UMD](https://github.com/umdjs/umd/) file is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/unites/unites.umd.min.js"></script>
```

You can use the library via `window.unites`.

## Usage

### Metric prefix (SI)

Calculates the [Metric prefix (SI)](1) and returns the size.

```ts
import { si } from 'unites'

si('1M').kilos()
// 1000

si(1, 'M').kilos()
// 1000
```

### Binary prefix

Calculates the [Binary prefix](2) and returns the size.

```ts
import { binary } from 'unites'

binary('1G').megas()
// 1024

binary(1, 'G').megas()
// 1024
```

## API

### Unit prefixes

```ts
import { si, binary } from 'unites'

si (value: number | string, symbol?: string): Units
binary (value: number | string, symbol?: string): Units
```

### Measurement units

```ts
si('1M').bytes()  // number
si('1M').kilos()  // number
si('1M').megas()  // number
si('1M').gigas()  // number
si('1M').teras()  // number
si('1M').petas()  // number
si('1M').exas()   // number
si('1M').yottas() // number
```

1. __Number values supported:__ Make sure that `symbol` param contains `k`, `M`, `G`, `T`, `P`, `E`, `Z` or `Y`.
1. __String values supported:__ `1k`, `0.5M`, `10G`, `1T`, `1.5P`, `0E`, `2Z` or `0.0001Y`

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/unites/pulls) or [issue](https://github.com/joseluisq/unites/issues).

## License
MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
