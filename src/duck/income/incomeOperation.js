import {
    CHANGED_TEXT,
    SAVE_INCOME,
    CLEAR_TEXT
} from './incomeType';

import {
    FETCH_AMOUNT
} from '../main/mainType';

import rsf from '../../saga/firebaseSaga';

import { call, takeLatest, put } from 'redux-saga/effects';
import NavigationService from '../../navigation/NavigationService';
import { getCurrentDate, getCurrentTime, getMonth, getYear } from '../../util/dateTimeUtil';

function* saveIncome(action) {
    try {
        console.log(getYear(action.payload.date));
        const key = yield call(rsf.database.create, `income/${getMonth(action.payload.date)}`, {
            amount: action.payload.amount,
            income: action.payload.income,
            incomeDate: getCurrentDate(action.payload.date),
            incomeTime: getCurrentTime(action.payload.time),
            description: action.payload.description,
            payment: action.payload.payment
        });

        yield put({ type: CLEAR_TEXT });
        yield put({ type: FETCH_AMOUNT })
        NavigationService.navigate('Main');

    } catch (error) {
        console.warn("save income failed ...");
        yield put({ type: CLEAR_TEXT });
    }
}

export function* watchSaveIncome() {
    yield takeLatest(SAVE_INCOME, saveIncome);
}