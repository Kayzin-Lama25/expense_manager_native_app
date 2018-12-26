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

export const getMonths = (state) => {
    var firstArr = new Array();
    var monthArr = new Array();

    _.map(state.transaction.fetchTransaction, (transaction, index) => {
        var length = state.transaction.fetchTransaction.length;
        var index = state.transaction.fetchTransaction.indexOf(transaction);

        firstArr.push({ label: transaction.month, value: index });
        if (firstArr.length == 3 || (firstArr.length < 3 && (length - index) < 3 && index > 2)) {
            console.log('here condition..', index);
            monthArr.push(firstArr);
            firstArr = new Array();
        }
    });
    return monthArr;
}

export const getYears = (state) => {

    const years = _.map(state.transaction.fetchTransaction, (transaction, index) => {

    });
}