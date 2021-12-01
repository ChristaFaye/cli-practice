const isAmountUndefined = (amount) => {
    return amount === undefined || amount < 0;
};

const isIntCurrencyUndefined = (intCurrency) => {
    return intCurrency === undefined;
};

const isTargetCurrenctyUndefined = (targetCurrency) => {
    return targetCurrency === undefined;
};

module.exports = {
    isAmountUndefined,
    isIntCurrencyUndefined,
    isTargetCurrenctyUndefined
} ;