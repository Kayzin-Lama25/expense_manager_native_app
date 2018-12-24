import {
    FETCH_ALL_TRANSACTION,
    FETCH_ALL_TRANSACTION_BY_SORT_TYPE,
    CLOSE_MODAL,
    OPEN_MODAL,
    SELECT_RADIO_VALUE,
    GET_FILTER
} from './transactionType';

export const fetchAllTransaction = () => {
    return {
        type: FETCH_ALL_TRANSACTION
    }
}

export const getAllTransactionBySortType = (sortType) => {
    return {
        type: FETCH_ALL_TRANSACTION_BY_SORT_TYPE,
        payload: sortType
    }
}

export const openModal = () => {
    return {
        type: OPEN_MODAL
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const selectRadioValue = (value) => {
    return {
        type: SELECT_RADIO_VALUE,
        payload: value
    }
}

export const getFilter = () => {
    return {
        type: GET_FILTER
    }
}