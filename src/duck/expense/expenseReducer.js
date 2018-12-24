import {
    CHANGED_TEXT_EXPENSE,
    CLEAR_TEXT
} from './expenseType';

const INITIAL_STATE = {
    price: '',
    expenseType: 'Clothing',
    payment: 'Cash',
    date: new Date(),
    time: new Date(),
    description: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGED_TEXT_EXPENSE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CLEAR_TEXT:
            return INITIAL_STATE;
        default:
            return state;
    }
}