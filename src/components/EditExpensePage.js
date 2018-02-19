import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { edit_expense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = (expense) => {
        this.props.edit_expense(this.props.expense.id, expense);
        this.props.history.push('/');
    }
    onRemove = () => {
        this.props.startRemoveExpense({id: this.props.expense.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div> 
            <ExpenseForm 
                expense= {this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove Expense</button>
        </div> 
        );
    }
}

const mapStateToProps = (state,props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id )
    };
}

const mapDispatchToProps = (dispatch, props) => ({
    edit_expense: (id, expense) => dispatch(edit_expense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);