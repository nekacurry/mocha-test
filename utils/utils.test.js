const { add, square, asyncAdd, asyncSquare } = require('./utils')
const expect = require('expect')
const fb = require('./utils')

it("Should add two numbers", () => {
  var res = add(11, 33)
  expect(res).toBe(44)
})

it("Should square a number", () => {
  var res = square(4);
  expect(res).toBe(16)
})

it("Should add two numbers, async", () => {
  asyncAdd(4, 8, (sum) => {
    expect(sum).toBe(12)
    done()
  })
})


it("Should square a number, async", () => {
  asyncSquare(3, () => {
    expect(square).toBe(9)
    done()
  })
})

it('Sanity check', () => {
  expect(2+3).toBe(5)
})

// TEST FIZZ
it('fizz', () => {
  expect(fb.FIZZ).toBe('fizz')
})

// TEST BUZZ
it('buzz', () => {
  expect(fb.BUZZ).toBe('buzz')
})

// TEST FIZZBUZZ
it('fizzbuzz', () => {
  expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

// TEST ISFIZZY
it('isFizzy', () => {
  expect(fb.isFizzy(1)).toBe(false)
  expect(fb.isFizzy(3)).toBe(true)
  expect(fb.isFizzy(10)).toBe(false)
  expect(fb.isFizzy(-1000)).toBe(false)
})

// TEST ISBUZZY
it('isBuzzy', () => {
  expect(fb.isBuzzy(1)).toBe(false)
  expect(fb.isBuzzy(5)).toBe(true)
  expect(fb.isBuzzy(15)).toBe(true)
  expect(fb.isBuzzy(100000)).toBe(true)
  expect(fb.isBuzzy(1000001)).toBe(false)
})

// TEST FIZZYBUZZY
it('fizzybuzzy', () => {
  expect(fb.fizzyBuzzy(3)).toBe(fb.FIZZ)
  expect(fb.fizzyBuzzy(5)).toBe(fb.BUZZ)
  expect(fb.fizzyBuzzy(15)).toBe(fb.FIZZBUZZ)
})

// TEST FIZZBUZZ
it('fizzBuzz', () => {
  expect(fb.fizzBuzz('121').fizz).toBe(32)
  expect(fb.fizzBuzz('121').buzz).toBe(16)
  expect(fb.fizzBuzz('121').fizzBuzz).toBe(8)
})

