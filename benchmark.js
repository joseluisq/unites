const Benchmark = require('benchmark')
const { si, binary } = require('./src')
const convert = require('convert-units')

const suite = new Benchmark.Suite()

suite
    // SI measures
    .add('si.bytes', () => si(1000, 'T').megas())
    .add('convert.bytes', () => convert(1).from('Tb').to('Mb'))
    // .add('si.kilos', () => si(1, 'k').kilos())
    // .add('si.megas', () => si(1, 'k').megas())
    // .add('si.gigas', () => si(1, 'k').gigas())
    // .add('si.teras', () => si(1, 'k').teras())
    // .add('si.petas', () => si(1, 'k').petas())
    // .add('si.exas', () => si(1, 'k').exas())
    // .add('si.yottas', () => si(1, 'k').yottas())
    // .add('si.zettas', () => si(1, 'k').zettas())

    // // Binary measures
    // .add('binary.bytes', () => binary(1, 'k').bytes())
    // .add('binary.kilos', () => binary(1, 'k').kilos())
    // .add('binary.megas', () => binary(1, 'k').megas())
    // .add('binary.gigas', () => binary(1, 'k').gigas())
    // .add('binary.teras', () => binary(1, 'k').teras())
    // .add('binary.petas', () => binary(1, 'k').petas())
    // .add('binary.exas', () => binary(1, 'k').exas())
    // .add('binary.yottas', () => binary(1, 'k').yottas())
    // .add('binary.zettas', () => binary(1, 'k').zettas())

    .on('cycle', (event) =>
        console.log(String(event.target)))
    .on('complete', () =>
        console.log('Fastest is ' + suite.filter('fastest').map('name')))
    .run({ async: true })
