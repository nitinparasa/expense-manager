import uuid from 'uuid';

// Add_Expense
export const add_expense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }  
})
// Remove_Expense
export const remove_expense = (
    {
        id
    } = {}
) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// Edit_Expense
export const edit_expense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})
