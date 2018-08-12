const BASE: number = 10e2
const SYMBOLS: string[] = [ 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y' ]

export interface Units {
  bytes (): number
  kilos (): number
  megas (): number
  gigas (): number
  teras (): number
  petas (): number
  exas (): number
  zettas (): number
  yottas (): number
}

function calcBySymbol (symbol: string, calc: Function): number {
  let r: number = 0

  if (SYMBOLS.indexOf(symbol) < 0) {
    return r
  }

  for (let i: number = 0; i < SYMBOLS.length; i++) {
    if (SYMBOLS[i] === symbol) {
      r = calc(i + 1)
      break
    }
  }

  return r
}

function asBytes (value: number, symbol: string, binary: boolean = false): number {
  return calcBySymbol(symbol, (n: number) => Math.pow(BASE + (binary ? 24 : 0), n) * value)
}

function bytesAs (bytes: number, symbol: string, binary: boolean = false): number {
  return calcBySymbol(symbol, (n: number) => (bytes / Math.pow(BASE + (binary ? 24 : 0), n)))
}

function units (bytes: number, binary: boolean = false): Units {
  return {
    bytes: () => bytes,
    kilos: () => bytesAs(bytes, 'k', binary),
    megas: () => bytesAs(bytes, 'M', binary),
    gigas: () => bytesAs(bytes, 'G', binary),
    teras: () => bytesAs(bytes, 'T', binary),
    petas: () => bytesAs(bytes, 'P', binary),
    exas: () => bytesAs(bytes, 'E', binary),
    zettas: () => bytesAs(bytes, 'Z', binary),
    yottas: () => bytesAs(bytes, 'Y', binary)
  }
}

function stringUnitToArray (str: string): [number, string] {
  const s = (str || '').toString()

  let value = 0
  let symbol = s.substring(s.length - 1)

  if (SYMBOLS.indexOf(symbol) < 0) {
    symbol = 'k'
  }

  const uNum = Number(s.substring(0, s.length - 1) || 0)
  value = isNaN(uNum) ? 0 : uNum

  return [ value, symbol ]
}

function calcUnits (value: number | string, symbol?: string, binary: boolean = false): Units {
  let bytes = 0

  if (typeof value === 'number' && symbol) {
    bytes = asBytes(value, symbol, binary)
  }

  if (typeof value === 'string') {
    const v = stringUnitToArray(value)
    bytes = asBytes(v[0], v[1], binary)
  }

  return units(bytes, binary)
}

export function si (value: number | string, symbol?: string): Units {
  return calcUnits(value, symbol, false)
}

export function binary (value: number | string, symbol?: string): Units {
  return calcUnits(value, symbol, true)
}
