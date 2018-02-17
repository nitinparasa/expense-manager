import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import testData from '../fixtures/expenses';

test('should filter text by value', () => {
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(testData, filters);

    expect(result).toEqual([testData[2],testData[0],testData[1]]);
});

test('should filter expenses by startDate', () =>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };

    const result = selectExpenses(testData, filters);

    expect(result).toEqual([testData[2],testData[0]]);
});

test('should filter expenses by endDate', () =>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };

    const result = selectExpenses(testData, filters);

    expect(result).toEqual([testData[0],testData[1]]);

});

test('should sort by Date', () =>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(testData, filters);

    expect(result).toEqual([testData[2],testData[0],testData[1]]);

});
test('should sort by amount', () =>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const result = selectExpenses(testData, filters);

    expect(result).toEqual([testData[2],testData[1],testData[0]]);

});