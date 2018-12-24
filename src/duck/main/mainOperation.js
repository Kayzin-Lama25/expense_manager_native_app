import {
    FETCH_AMOUNT,
    FETCH_AMOUNT_RECEIVED
} from './mainType';

import rsf from '../../saga/firebaseSaga';

import { call, takeLatest, put } from 'redux-saga/effects';
import _ from 'lodash';

import NavigationService from '../../navigation/NavigationService';

function* fetchAmount() {
    try {
        const incomeList = yield call(rsf.database.read, 'income');
        const expenseList = yield call(rsf.database.read, 'expense');

        const totalIncome = totalIncomeAmount(incomeList);
        const totalExpense = totalExpenseAmount(expenseList);
        const totalBalance = totalIncome - totalExpense;

        yield put({
            type: FETCH_AMOUNT_RECEIVED,
            payload: { 'income': totalIncome, 'expense': totalExpense, 'balance': totalBalance }
        });

    } catch (error) {
        console.warn("main fetch failed ...");
    }
}

function totalIncomeAmount(incomeList) {
    const incomeArr = _.map(incomeList, (val, month) => {            //transforming object to array
        return _.map(val, (value, uid) => {
            return parseFloat(value.amount);
        });
    });

    var income_arr = new Array();
    for (var i = 0; i < incomeArr.length; i++) {
        for (var j = 0; j < incomeArr[i].length; j++) {
            income_arr.push(incomeArr[i][j]);
        }
    }

    const totalIncome = _.reduce(income_arr, (n, sum) => {
        return parseFloat(sum) + parseFloat(n);
    });
    return totalIncome;
}

function totalExpenseAmount(expenseList) {
    const expenseArr = _.map(expenseList, (val, month) => {            //transforming object to array
        return _.map(val, (value, uid) => {
            return parseFloat(value.price);
        });
    });

    var expense_arr = new Array();
    for (var i = 0; i < expenseArr.length; i++) {
        for (var j = 0; j < expenseArr[i].length; j++) {
            expense_arr.push(expenseArr[i][j]);
        }
    }

    const totalExpense = _.reduce(expense_arr, function (sum, n) {
        return parseFloat(sum) + parseFloat(n);
    });
    return totalExpense;
}

export function* watchFetchAmount() {
    yield takeLatest(FETCH_AMOUNT, fetchAmount);
}