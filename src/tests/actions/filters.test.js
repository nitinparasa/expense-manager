import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';

test('should generate setStartDate action object', () => {
    const action = setStartDate(moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate setEndDate action object', () => {
    const action = setEndDate(moment(0));
    
    expect(action).toEqual({
            type: 'SET_END_DATE',
            endDate: moment(0)
    });
});

test('should set text filter action object', () => {
    const action = setTextFilter('Rent');

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });
});

test('should set text filter action object', () => {
    const text = '';
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


test('should sortBy amount action object', () => {
    const action = sortByAmount();
    
    expect(action).toEqual({
            type: 'SORT_BY_AMOUNT',
    });
});


test('should sortyBy date action object', () => {
    const action = sortByDate();
    
    expect(action).toEqual({
            type: 'SORT_BY_DATE',
    });
});