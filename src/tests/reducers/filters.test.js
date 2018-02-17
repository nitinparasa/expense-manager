import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const result = filterReducer(undefined, { type: '@@INIT' });

    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should sort expenses by amount', () => {
    const result = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});

    expect(result).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should sort expenses by date', () => {
    const result = filterReducer(undefined, { type: 'SORT_BY_DATE'});

    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set text filter', () => {
    const result = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'expense'});

    expect(result).toEqual({
        text: 'expense',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set start date', () => {
    const result = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment().startOf('month')});

    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set end date', () => {
    const result = filterReducer(undefined, { type: 'SET_END_DATE', endDate: moment().endOf('month')});

    expect(result).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});