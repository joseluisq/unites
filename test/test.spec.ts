import { binary, si } from '../src'

const measures = [ 'bytes', 'kilos', 'megas', 'gigas', 'teras', 'petas', 'exas', 'yottas', 'zettas' ]

function test (fn: any, n: number, m: string) {
  const len = measures.length

  console.log('  %s tests', fn.name.toUpperCase())

  for (let i = 0; i < len; i++) {
    const measure = measures[i]
    const p = fn(n, m)[measure]()
    const s = fn(n + m)[measure]()

    if (p !== s) {
      console.log('    `%s` (%s) test ✕', measure, p)
      console.log()
      const msg = 'Error: Unit values `' + p + '` and `' + s + '` are not equal.'
      console.error(msg)
      console.log()
      throw new Error(msg)
    }

    console.log('    `%s` (%s) test ✓', measure, p)
  }

  console.log()
  console.log('  TOTAL: ' + len + ' SUCCESS')
  console.log()
}

console.log('Unites test suite')

test(si, 1, 'M')
test(binary, 1, 'M')
