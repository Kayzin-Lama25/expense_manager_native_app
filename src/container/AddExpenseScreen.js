import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Input from '../component/Input';
import PickerSelect from '../component/PickerSelect';
import DateTimeInput from '../component/DateTimeInput';
import TextArea from '../component/TextArea';
import Button from '../component/Button';

import Icons from '../theme/Icon';

import { changeExpenseText, saveExpense } from '../action';

import { getCurrentDate, getCurrentTime } from '../util/dateTimeUtil';

class AddExpenseScreen extends Component {

    render() {

        const expenseTypeArr = ['Clothing',
            'Drinks',
            'Education',
            'Food',
            'Fuel',
            'Fun',
            'Hospital',
            'Hotel',
            'Medical',
            'Merchandise',
            'Movie',
            'Other',
            'Personal',
            'Pets',
            'Restaurant',
            'Shopping',
            'Tips',
            'Transport'];

        const paymentArr = ['Cash', 'Credit Card', 'Debit Card', 'Net Banking'];

        const { price, expenseType, payment, date, time, description } = this.props;

        return (
            <View style={{ flex: 1 }}>

                <Input
                    placeholder="Price"
                    onChangeText={(text) => this.props.changeExpenseText({ prop: 'price', value: text })}
                    textValue={price}
                />

                <PickerSelect
                    onChangeText={(text) => this.props.changeExpenseText({ prop: 'expenseType', value: text })}
                    selectedValue={expenseType}
                    pickerItem={expenseTypeArr}
                />

                <DateTimeInput
                    todayDateValue={getCurrentDate(date)}
                    source={Icons.calendarIcon}
                    onChangeText={(text) => this.props.changeExpenseText({ prop: 'date', value: text })}
                    mode="date"
                />

                <DateTimeInput
                    todayDateValue={getCurrentTime(time)}
                    source={Icons.clockIcon}
                    onChangeText={(text) => this.props.changeExpenseText({ prop: 'time', value: text })}
                    mode="time"
                />

                <TextArea
                    placeholder="Description"
                    textValue={description}
                    onChangeText={(text) => this.props.changeExpenseText({ prop: 'description', value: text })}
                />

                <PickerSelect
                    onChangeText={(text) => this.props.changeExpenseText({ prop: 'payment', value: text })}
                    selectedValue={payment}
                    pickerItem={paymentArr}
                />

                <Button
                    onPress={() => this.props.saveExpense(this.props)}
                    text='Save'
                />

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { price, expenseType, payment, date, time, description } = state.expense;
    console.log("map state to prop in add expense", state.expense)
    return { price, expenseType, payment, date, time, description }
}

export default connect(mapStateToProps, { changeExpenseText, saveExpense })(AddExpenseScreen);