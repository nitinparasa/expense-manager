import React from 'react';
import ExpenseList from './ExpenseList';
import ExpeListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => ( 
    <div> 
        <ExpensesSummary />
        <ExpeListFilter />    
        <ExpenseList />
    </div> 
);

export default ExpenseDashboardPage;