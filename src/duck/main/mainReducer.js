import {
    FETCH_AMOUNT,
    FETCH_AMOUNT_RECEIVED
} from './mainType';

const INITIAL_STATE = {
    main: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_AMOUNT_RECEIVED:
            return { ...state, main: action.payload };
        default:
            return state;
    }
}