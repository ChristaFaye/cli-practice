//Functions for user input validation
const isAmountUndefined = (amount) => {
    return amount === undefined || amount < 0;
};

const isIntCurrencyUndefined = (intCurrency) => {
    return intCurrency === undefined;
};

const isTargetCurrenctyUndefined = (targetCurrency) => {
    return targetCurrency === undefined;
};


//Functions for checking if currency is supported

const supportedCurrencies = [
    'USD',
    'CAD',
    'PHP',
    'GBP',
    'EUR'
];

const intCurrencyIncluded = (intCurrency) => {
    return supportedCurrencies.includes(intCurrency) === false;
};

const targetCurrencyIncluded = (targetCurrency) => {
    return supportedCurrencies.includes(targetCurrency) === false;
};

module.exports = {
    //User Input Validation functions
    isAmountUndefined,
    isIntCurrencyUndefined,
    isTargetCurrenctyUndefined,
    //Supported currencies check functions
    intCurrencyIncluded,
    targetCurrencyIncluded
} ;