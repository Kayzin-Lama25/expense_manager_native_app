import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { convertStringToDate } from '../util/dateTimeUtil';

class SubFlatListItem extends Component {

    render() {

        const { transaction } = this.props;

        const { subFlatListItemStyle,
            circleContentStyle,
            viewBtnContentStyle,
            viewBtnStyle,
            circleRedStyle,
            circleGreenStyle,
            circleTextStyle,
            circleBesideTextStyle } = styles;

        return (
            <View style={subFlatListItemStyle}>

                <View style={circleContentStyle}>
                    <View style={(transaction.amount != null) ? circleGreenStyle : circleRedStyle}>
                        <Text style={circleTextStyle}>
                            {convertStringToDate(transaction.expenseDate || transaction.incomeDate)}
                        </Text>
                    </View>

                    <View style={circleBesideTextStyle}>
                        <Text style={(transaction.amount != null) ? circleBesideTextStyle.textGreenColor : circleBesideTextStyle.textRedColor}>
                            {transaction.amount || transaction.price}
                        </Text>
                        <Text style={(transaction.amount != null) ? circleBesideTextStyle.textGreenColor : circleBesideTextStyle.textRedColor}>
                            {transaction.income || transaction.expenseType}
                        </Text>
                    </View>

                </View>

                <View style={viewBtnContentStyle}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <View style={viewBtnStyle}>
                            <Text style={viewBtnStyle.textStyle}>View</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View >
        )
    }
}

const styles = {
    subFlatListItemStyle: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#b3b3b3',
        padding: 5
    },
    circleContentStyle: {
        flex: 0.8,
        flexDirection: 'row',
    },
    circleRedStyle: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF0000',
        borderWidth: 1,
        borderColor: '#FF0000',
        borderRadius: 50 / 2
    },
    circleGreenStyle: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#228B22',
        borderWidth: 1,
        borderColor: '#228B22',
        borderRadius: 50 / 2
    },
    circleTextStyle: {
        color: '#fff',
        fontSize: 16
    },
    circleBesideTextStyle: {
        marginLeft: 13,
        justifyContent: 'center',
        textRedColor: {
            color: '#FF0000',
            fontSize: 16
        },
        textGreenColor: {
            color: '#228B22',
            fontSize: 16
        }
    },

    viewBtnContentStyle: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'violet'
    },
    viewBtnStyle: {
        backgroundColor: '#708090',
        alignItems: 'center',
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    }
}

export default SubFlatListItem;