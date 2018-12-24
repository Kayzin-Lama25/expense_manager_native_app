import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import Input from '../component/Input';
import DateTimeInput from '../component/DateTimeInput';
import PickerSelect from '../component/PickerSelect';
import TextArea from '../component/TextArea';
import Button from '../component/Button';

import Icons from '../theme/Icon';

import { changeText, saveIncome } from '../action';

import { getCurrentDate, getCurrentTime } from '../util/dateTimeUtil';

class AddIncomeScreen extends Component {

    render() {

        const { amount, income, payment, date, time, description } = this.props;

        const incomeArr = ['Business', 'Loan', 'Salary'];
        const paymentArr = ['Cash', 'Credit Card', 'Debit Card', 'Net Banking'];

        return (
            <View style={{ flex: 1 }}>

                <Input
                    placeholder="Amount"
                    onChangeText={(text) => this.props.changeText({ prop: 'amount', value: text })}
                    textValue={amount}
                />

                <PickerSelect
                    onChangeText={(text) => this.props.changeText({ prop: 'income', value: text })}
                    selectedValue={income}
                    pickerItem={incomeArr}
                />

                <DateTimeInput
                    todayDateValue={getCurrentDate(date)}
                    source={Icons.calendarIcon}
                    onChangeText={(text) => this.props.changeText({ prop: 'date', value: text })}
                    mode="date"
                />

                <DateTimeInput
                    todayDateValue={getCurrentTime(time)}
                    source={Icons.clockIcon}
                    onChangeText={(text) => this.props.changeText({ prop: 'time', value: text })}
                    mode="time"
                />

                <TextArea
                    placeholder="Description"
                    textValue={description}
                    onChangeText={(text) => this.props.changeText({ prop: 'description', value: text })}
                />

                <PickerSelect
                    onChangeText={(text) => this.props.changeText({ prop: 'payment', value: text })}
                    selectedValue={payment}
                    pickerItem={paymentArr}
                />

                <Button
                    onPress={() => this.props.saveIncome(this.props)}
                    text="Save"
                />
            </View>
        );
    }

}

const mapStateToProps = (state) => {
    const { amount, income, payment, date, time, description } = state.income;
    console.log("map state to props in add income screen >> ", state);
    return { amount, income, payment, date, time, description }
}

export default connect(mapStateToProps, { changeText, saveIncome })(AddIncomeScreen);