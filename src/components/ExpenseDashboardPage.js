import React from 'react';
import ExpenseList from './ExpenseList';
import ExpeListFilter from './ExpenseListFilter';

const ExpenseDashboardPage = () => ( 
    <div> 
        <ExpeListFilter />    
        <ExpenseList />
    </div> 
);

export default ExpenseDashboardPage;