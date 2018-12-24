import {
    CLEAR_TEXT,
    SAVE_EXPENSE
} from './expenseType';

import {
    FETCH_AMOUNT
} from '../main/mainType';

import rsf from '../../saga/firebaseSaga';

import { call, takeLatest, put } from 'redux-saga/effects';
import NavigationService from '../../navigation/NavigationService';
import { getCurrentDate, getCurrentTime, getMonth } from '../../util/dateTimeUtil';

function* saveExpense(action) {
    try {
        const key = yield call(rsf.database.create, `expense/${getMonth(action.payload.date)}`, {
            price: action.payload.price,
            expenseType: action.payload.expenseType,
            expenseDate: getCurrentDate(action.payload.date),
            expenseTime: getCurrentTime(action.payload.time),
            description: action.payload.description,
            payment: action.payload.payment
        });

        yield put({ type: CLEAR_TEXT });
        yield put({ type: FETCH_AMOUNT });
        NavigationService.navigate('Main');

    } catch (error) {
        console.warn("save expense failed ...");
        yield put({ type: CLEAR_TEXT });
    }
}

export function* watchSaveExpense() {
    yield takeLatest(SAVE_EXPENSE, saveExpense);
}