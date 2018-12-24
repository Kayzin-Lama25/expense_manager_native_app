import {
    CHANGED_TEXT,
    CLEAR_TEXT
} from './incomeType';

const INITIAL_STATE = {
    amount: '',
    payment: 'Cash',
    income: 'Business',
    date: new Date(),
    time: new Date(),
    description: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGED_TEXT:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CLEAR_TEXT:
            return INITIAL_STATE;
        default:
            return state;
    }
}