// Exporting multiple function
// Экспорт нескольких функций
const getCurrentDate = () => new Date().toISOString();

const formatCurrency = (amount, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
};

// Method 1: Exporting multiple item
// Метод 1: Экспорт нескольких элементов
exports.getCurrentDate = getCurrentDate;
exports.formatCurrency = formatCurrency;

// Method 2: Exporting an object with multiple properties
// Метод 2: Экспорт объекта с несколькими свойствами
// module.exports = { getCurrentDate, formatCurrency };
