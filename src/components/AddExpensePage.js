import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddingExpenses } from '../actions/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.startAddingExpenses(expense);
        this.props.history.push('/dashboard');
    };
    render() {
        return ( 
            <div> 
                <h2>Add Expense</h2>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div> 
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddingExpenses: (expense) => dispatch(startAddingExpenses(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);