import expensesTotal from '../../selectors/expenses-total';
import testData from '../fixtures/expenses';

test('should return 0 if no expenses are listed', () => {
    const result = expensesTotal([]);

    expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
    const result = expensesTotal(new Array(testData[1]));

    expect(result).toBe(32);
});

test('should correctly add up multiple expense', () => {
    const result = expensesTotal(testData);

    expect(result).toBe(95);
});