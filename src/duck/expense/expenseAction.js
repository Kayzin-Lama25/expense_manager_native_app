import {
    CHANGED_TEXT_EXPENSE,
    SAVE_EXPENSE
} from './expenseType';

export const changeExpenseText = ({ prop, value }) => {
    return {
        type: CHANGED_TEXT_EXPENSE,
        payload: { prop, value }
    }
}

export const saveExpense = (expense) => {
    return {
        type: SAVE_EXPENSE,
        payload: expense
    }
}