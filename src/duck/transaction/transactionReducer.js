import {
    FETCH_ALL_TRANSACTION,
    FETCH_ALL_TRANSACTION_RECEIVED,
    FILTER_ALL_TRANSACTION_RECEIVED,
    CLOSE_MODAL,
    OPEN_MODAL,
    SELECT_RADIO_VALUE,
    FETCH_MONTH_YEAR_AND_CATEGORIES_RECEIVED
} from './transactionType';

const INITIAL_STATE = {
    fetchTransaction: '',
    filterTransaction: '',
    modalVisible: false,
    value: 0,
    months: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ALL_TRANSACTION_RECEIVED:
            return { ...state, fetchTransaction: action.payload };
        case FILTER_ALL_TRANSACTION_RECEIVED:
            return { ...state, filterTransaction: action.payload };
        case CLOSE_MODAL:
            return { ...state, modalVisible: false, value: 0 };
        case OPEN_MODAL:
            return { ...state, modalVisible: true };
        case SELECT_RADIO_VALUE:
            return { ...state, value: action.payload };
        case FETCH_MONTH_YEAR_AND_CATEGORIES_RECEIVED:
            return { ...state, months: action.payload };
        default:
            return state;
    }
}
