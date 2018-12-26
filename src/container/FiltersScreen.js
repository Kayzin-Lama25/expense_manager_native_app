import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import FilterType from '../component/FilterType';
import Button from '../component/Button';

import { fetchMonthYearAndCategories } from '../action';

class FiltersScreen extends Component {

    componentWillMount() {
        this.props.fetchMonthYearAndCategories();
    }

    render() {
        const expense_type = [
            [{ "label": 'All', "value": 0 }, { "label": 'Income', "value": 1 }, { "label": 'Expense', "value": 2 }]
        ];

        const payment_modes = [
            [{ label: 'Cash', value: 0 }, { label: 'Credit Card', value: 1 }, { label: 'Debit Card', value: 2 }],
            [{ label: 'Net Banking', value: 3 }]
        ];

        const { months } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <FilterType filterData={expense_type} titleText='Expense Type' />
                    <FilterType filterData={months || new Array()} titleText='Months' />
                    {/* <FilterType filterData={payment_modes} titleText='Years' /> */}
                    {/* <FilterType filterData={payment_modes} titleText='Catagories' /> */}
                    <FilterType filterData={payment_modes} titleText='Payment Modes' />

                    <View style={{ flex: 1, flexDirection: 'row' }}></View>
                </ScrollView >

                <View style={{
                    flex: 0.1,
                    //flexDirection: 'row',
                    justifyContent: 'flex-end',
                    borderTopWidth: 1,
                    borderTopColor: '#b3b3b3',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    padding: 7
                }}>
                    <Button text='Apply' />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log("map state to props in filter screen >> ", JSON.stringify(state.transaction.months));
    const { months } = state.transaction;
    return { months };
}

export default connect(mapStateToProps, { fetchMonthYearAndCategories })(FiltersScreen);