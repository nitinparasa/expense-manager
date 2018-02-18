// Totalling all the expenses
export default (expenses) => {
    return expenses.reduce((total, expense) => total += expense.amount , 0);
};