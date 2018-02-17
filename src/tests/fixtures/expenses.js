import moment from 'moment';

export default [{
    id: 1,
    description: 'Expense 1',
    amount: 25,
    note: '',
    createdAt: 0
},
{
    id: 2,
    description: 'Expense 2',
    amount: 32,
    note: '',
    createdAt: moment(0).subtract(4,'days').valueOf()
},
{
    id: 3,
    description: 'Expense 3',
    amount: 38,
    note: '',
    createdAt: moment(0).add(4,'days').valueOf()
}
];