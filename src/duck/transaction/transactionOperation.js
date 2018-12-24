import {
    FETCH_ALL_TRANSACTION,
    FETCH_ALL_TRANSACTION_RECEIVED,
    FILTER_ALL_TRANSACTION_RECEIVED,
    FETCH_ALL_TRANSACTION_BY_SORT_TYPE,
    CLOSE_MODAL
} from './transactionType';

import rsf from '../../saga/firebaseSaga';

import { call, takeLatest, put, select } from 'redux-saga/effects';
import _ from 'lodash';

import NavigationService from '../../navigation/NavigationService';

import { getAllTransactionByToday } from '../transaction/transactionSelector';

function* fetchAllTransaction() {
    try {

        const incomeList = yield call(rsf.database.read, 'income');
        const expenseList = yield call(rsf.database.read, 'expense');

        const transactionList = getTotalTransaction(incomeList, expenseList);

        yield put({ type: FETCH_ALL_TRANSACTION_RECEIVED, payload: transactionList });
        yield put({ type: FILTER_ALL_TRANSACTION_RECEIVED, payload: transactionList });

    } catch (error) {
        console.warn("fetch failed!")
    }
}

function getTotalTransaction(incomeList, expenseList) {
    const incomeArr = _.map(incomeList, (value, month) => {
        const arr = getArray(value);
        return { month, value: arr };
    });

    const transactionArr = _.map(expenseList, (value, month) => {
        const arr = getArray(value);
        const transaction = getTransactionArr(arr, incomeArr, month);
        return { month, value: transaction };
    });
    return transactionArr;
}

function getArray(value) {
    const arr = _.map(value, (val, uid) => {
        return { uid, ...val };
    });
    return arr;
}

function getTransactionArr(arr, incomeArr, month) {
    _.map(incomeArr, (income, index) => {
        if (month === income.month) {
            _.map(income.value, (value, index) => {
                arr.push(value);
            });
        }
    });
    return arr;
}

export function* watchFetchAllTransaction() {
    yield takeLatest(FETCH_ALL_TRANSACTION, fetchAllTransaction);
}

function* fetchAllTransactionBySortType(action) {
    try {
        console.log("SORT TYPE >> ", action.payload);

        if (action.payload === 0) {

            yield put({ type: FETCH_ALL_TRANSACTION });
            yield put({ type: CLOSE_MODAL });

        } else if (action.payload === 1) {

            const transactionList = yield select(getAllTransactionByToday, action.payload);
            yield put({ type: FILTER_ALL_TRANSACTION_RECEIVED, payload: transactionList });
            yield put({ type: CLOSE_MODAL });

        } else if (action.payload === 2) {

            const transactionList = yield select(getAllTransactionByToday, action.payload);
            yield put({ type: FILTER_ALL_TRANSACTION_RECEIVED, payload: transactionList });
            yield put({ type: CLOSE_MODAL });

        } else if (action.payload === 3) {

            const transactionList = yield select(getAllTransactionByToday, action.payload);
            yield put({ type: FILTER_ALL_TRANSACTION_RECEIVED, payload: transactionList });
            yield put({ type: CLOSE_MODAL });

        } else if (action.payload === 4) {

            const transactionList = yield select(getAllTransactionByToday, action.payload);
            yield put({ type: FILTER_ALL_TRANSACTION_RECEIVED, payload: transactionList });
            yield put({ type: CLOSE_MODAL });

        } else if (action.payload === 5) {

            const transactionList = yield select(getAllTransactionByToday, action.payload);
            yield put({ type: FILTER_ALL_TRANSACTION_RECEIVED, payload: transactionList });
            yield put({ type: CLOSE_MODAL });

        }

    } catch (error) {
        console.warn('failed');
    }
}

export function* watchFetchAllTransactionBySort() {
    yield takeLatest(FETCH_ALL_TRANSACTION_BY_SORT_TYPE, fetchAllTransactionBySortType);
}
