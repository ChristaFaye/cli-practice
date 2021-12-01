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

const ratesValue = {
    USD: 1, //US Dollar
    CAD: 1.27, //Canadian Dollar
    PHP: 50.37, //Philippine Peso
    GBP: 0.75, //British Pound
    EUR: 0.88 //Euro
    }

const intCurrencyNotIncluded = (intCurrency) => {
    return supportedCurrencies.includes(intCurrency) === false;
};

const targetCurrencyNotIncluded = (targetCurrency) => {
    return supportedCurrencies.includes(targetCurrency) === false;
};

module.exports = {
    //User Input Validation functions
    isAmountUndefined,
    isIntCurrencyUndefined,
    isTargetCurrenctyUndefined,
    //Supported currencies check functions
    intCurrencyNotIncluded,
    targetCurrencyNotIncluded,
    supportedCurrencies,
    ratesValue
} ;