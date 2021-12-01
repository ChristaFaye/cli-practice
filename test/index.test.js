// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.


//Import functions
const f = require('../src/functions');

//Test Cases for User input validation
describe('isAmountUndefined()', () => {
  test('should return true when the amount is undefined', () => {
    let amount;
    const result = f.isAmountUndefined();
    expect(result).toBe(true);
  });
});

describe('isIntCurrencyUndefined()', () => {
  test('should return true when the initial currency is undefined', () => {
    let intCurrency;
    const result = f.isIntCurrencyUndefined();
    expect(result).toBe(true);
  });
});

describe('isTargetCurrenctyUndefined()', () => {
  test('should return true when the target currency is undefined', () => {
    let targetCurrency;
    const result = f.isTargetCurrenctyUndefined();
    expect(result).toBe(true);
  });
});


//Test Cases supported currencies check functions
describe('intCurrencyNotIncluded()', () => {
  test('should return true when the initial currency is not supported', () => {
    let intCurrency;
    const result = f.intCurrencyNotIncluded();
    expect(result).toBe(true);
  });
});

describe('targetCurrencyNotIncluded()', () => {
  test('should return true when the target currency is not supported', () => {
    let targetCurrency;
    const result = f.targetCurrencyNotIncluded();
    expect(result).toBe(true);
  });
});