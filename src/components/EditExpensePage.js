import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { edit_expense, remove_expense } from '../actions/expenses';

const EditExpensePage = (props) => ( 
    <div> 
        <ExpenseForm 
            expense= {props.expense}
            onSubmit={(expense) => {
                //console.log(expense);
            props.dispatch(edit_expense(props.expense.id, expense));
            props.history.push('/');
            }}
        />
        <button onClick={(e) => {
            props.dispatch(remove_expense({id: props.expense.id }));
            props.history.push('/');
        }}>Remove Expense</button>

    </div> 
);

const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id )
    };
}

export default connect(mapStateToProps)(EditExpensePage);