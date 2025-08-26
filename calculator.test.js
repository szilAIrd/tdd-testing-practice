const calculator = require('./calculator.js')

test('Add: input 3 and 5 and expect 8',()=>{
    expect(calculator.add(3,5)).toBe(8)
})

test('Subtract: input 5 and 2 and expect 3',()=>{
    expect(calculator.subtract(5,2)).toBe(3)
})

test('Multiply: input 3 and 5 and expect 8',()=>{
    expect(calculator.mutiply(3,5)).toBe(15)
})

test('Divide: input 6 and 2 and expect 3',()=>{
    expect(calculator.divide(6,2)).toBe(3)
})