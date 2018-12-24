import _ from 'lodash';
import {
    getCurrentDate,
    getYesterDayDate,
    getLastSevenDate,
    getMonth,
    getLastMonth
} from '../../util/dateTimeUtil';

const todayDate = new Date();

export const getAllTransactionByToday = (state, sortType) => {
    const transactionList = _.map(state.transaction.fetchTransaction, (transaction, index) => {
        const filter = filterTransaction(transaction.value, sortType);
        if (filter.length > 0) {
            return { month: transaction.month, value: filter }
        }
    });

    const transList = transactionList.filter((filter) => {
        if (filter != null) return filter;
    });
    console.log("TRANS >> ", JSON.stringify(transList));
    return transList;
}

function filterTransaction(value, sortType) {
    const filterTransaction = value.filter((val) => {
        if (sortType == 1) {
            if ((val.incomeDate || val.expenseDate) === getCurrentDate(todayDate)) return val;
        } else if (sortType == 2) {
            if ((val.incomeDate || val.expenseDate) === getYesterDayDate()) return val;
        } else if (sortType == 3) {
            if ((val.incomeDate || val.expenseDate) <= getCurrentDate(todayDate) &&
                (val.incomeDate || val.expenseDate) >= getCurrentDate(getLastSevenDate())) return val;
        } else if (sortType == 4) {
            if ((getMonth(val.incomeDate) || getMonth(val.expenseDate)) == getMonth(todayDate)) return val;
        } else if (sortType == 5) {
            //console.log(getLastMonth(todayDate));
            if ((getMonth(val.incomeDate) || getMonth(val.expenseDate)) == getLastMonth(todayDate)) return val;
        }
    });
    return filterTransaction;
}
