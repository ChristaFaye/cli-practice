//Functions for user input validation
const isAmountUndefined = (amount) => {
    return amount === undefined || amount < 0;
};

const isAmountString = (amount) => {
    return isNaN(amount);
};

const isIntCurrencyUndefined = (intCurrency) => {
    return intCurrency === undefined;
};

const isTargetCurrenctyUndefined = (targetCurrency) => {
    return targetCurrency === undefined;
};


//Array for checking if currency is supported
const supportedCurrencies = [
    'USD', 'CAD', 'PHP',
    'GBP', 'EUR', 'INR',
    'AUD', 'SGD', 'JPY',
    'SAR', 'KRW', 'HKD'
];

//Conversion rate, USD as base currency
const ratesValue = {
    USD: 1, //US Dollar
    CAD: 1.27, //Canadian Dollar
    PHP: 50.37, //Philippine Peso
    GBP: 0.75, //British Pound
    EUR: 0.88, //Euro
    INR: 74.84, //Indian Rupee
    AUD: 1.39, //Australian Dollar
    SGD: 1.36, //Singapore Dollar
    JPY: 113.04, //Japanese Yen
    SAR: 3.75, //Saudi Arabian Riyals
    KRW: 1173.87, //South Korean Won
    HKD: 7.79 //Hong Kong Dollars
}

//Functions for checking supported currencies
const intCurrencyNotIncluded = (intCurrency) => {
    return supportedCurrencies.includes(intCurrency) === false;
};

const targetCurrencyNotIncluded = (targetCurrency) => {
    return supportedCurrencies.includes(targetCurrency) === false;
};

//Exports functions
module.exports = {
    //User Input Validation functions
    isAmountUndefined,
    isAmountString,
    isIntCurrencyUndefined,
    isTargetCurrenctyUndefined,
    //Supported currencies check functions
    intCurrencyNotIncluded,
    targetCurrencyNotIncluded,
    supportedCurrencies,
    //Rates value array
    ratesValue
} ;