// Set_Text_Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// Sort_By_Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})
// Sort_By_Amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// Set_Start_Date
export const setStartDate = (startDate = '') => ({
    type: 'SET_START_DATE',
    startDate
})
// Set_End_Date
export const setEndDate = (endDate = '') => ({
    type: 'SET_END_DATE',
    endDate
})

