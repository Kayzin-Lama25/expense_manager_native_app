import { combineReducers } from 'redux';

import incomeReducer from '../duck/income/incomeReducer';
import expenseReducer from '../duck/expense/expenseReducer';
import mainReducer from '../duck/main/mainReducer';
import transactionReducer from '../duck/transaction/transactionReducer';

export default combineReducers({
    expense: expenseReducer,
    income: incomeReducer,
    main: mainReducer,
    transaction: transactionReducer
});