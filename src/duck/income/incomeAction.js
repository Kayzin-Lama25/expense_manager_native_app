import {
    CHANGED_TEXT,
    SAVE_INCOME
} from './incomeType';

export const changeText = ({ prop, value }) => {
    return {
        type: CHANGED_TEXT,
        payload: { prop, value }
    }
}

export const saveIncome = (income) => {
    return {
        type: SAVE_INCOME,
        payload: income
    }
}