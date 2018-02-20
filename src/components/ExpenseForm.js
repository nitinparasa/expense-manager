import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

const now = moment();
//console.log(now.format());

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            id: props.expense ? props.expense.id : '',
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? props.expense.amount.toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
        //console.log('Id is'+ this.state.id);
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value; // or we can use e.persist(); and use the e.target while setting state
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;

        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
           this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            // Set an error message
            const error = this.state.error;
            this.setState(() => ({ error: 'Please enter a valid description and amount' }));
        }
        else{
            // Clear the error
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10),
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            })
        }

    }
    render(){
        return(
            <div>
                {this.state.error !== null && <p>{this.state.error}</p>}
                <h4> Expense Form </h4>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text" 
                        placeholder="Amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea 
                        placeholder="Add a note for the expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>
                    {this.state.id !== "" ? 'Update Expense' : 'Add Expense'}
                    </button>
                </form>
            </div>
        )
    }
}