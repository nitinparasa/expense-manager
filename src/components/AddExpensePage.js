import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddingExpenses } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddingExpenses(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add Expense</h1>
                        <div className="content-container">
                            <ExpenseForm
                                onSubmit={this.onSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddingExpenses: (expense) => dispatch(startAddingExpenses(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);