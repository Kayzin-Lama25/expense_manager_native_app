import { delay } from 'redux-saga';
import { fork } from 'redux-saga/effects';

import { watchSaveIncome } from '../duck/income/incomeOperation';
import { watchSaveExpense } from '../duck/expense/expenseOperation';
import { watchFetchAmount } from '../duck/main/mainOperation';
import { watchFetchAllTransaction, watchFetchAllTransactionBySort, watchFetchMonthYearAndCategories } from '../duck/transaction/transactionOperation';

export default function* rootSaga() {

    yield [
        fork(watchSaveIncome),
        fork(watchSaveExpense),
        fork(watchFetchAmount),
        fork(watchFetchAllTransaction),
        fork(watchFetchAllTransactionBySort),
        fork(watchFetchMonthYearAndCategories)
    ]
}