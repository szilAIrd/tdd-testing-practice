const caesarCipher = require('./ceasercipher.js')

test('car and shiftFactor 3 should give fdu',()=>{
    expect(caesarCipher('car',3)).toBe('fdu')
})

test('car and shiftFactor 3 should give fdu',()=>{
    expect(caesarCipher('c,r',3)).toBe('f,u')
})