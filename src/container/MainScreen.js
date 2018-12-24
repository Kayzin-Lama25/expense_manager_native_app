import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import ImageButton from '../component/ImageButton';
import Icon from '../theme/Icon';
import BulletText from '../component/BulletText';

import { fetchAmount } from '../action';
import { convertString } from '../util/convertStringUtil';

class MainScreen extends Component {

    componentWillMount() {
        this.props.fetchAmount();
    }

    render() {

        const {
            outerBox,
            sub_outerBox,
            second_sub_outerBox,
            innerBox,
            chartTextContentStyle,
            chartTextStyle
        } = styles;

        const { income, expense, balance } = this.props.main;

        const data = [
            [0, 1],
            [1, 3],
            [3, 7],
            [4, 9],
        ];

        return (
            <View style={{ flex: 1 }}>
                <View style={outerBox}>
                    <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        {/* <Image source={require('../icon/chart.png')} />here chart */}

                    </View>
                    <View style={chartTextContentStyle}>
                        <Text style={chartTextStyle}>Current Month Chart-December 2018</Text>
                    </View>
                    <View style={chartTextContentStyle}>
                        <BulletText
                            source={Icon.squareIcon}
                            bulletTextStyle={{
                                fontSize: 10,
                                marginLeft: 5,
                                color: 'green'
                            }}
                            text={convertString('Income ', income)} />

                        <BulletText
                            source={Icon.squareIcon}
                            bulletTextStyle={{
                                fontSize: 10,
                                marginLeft: 5,
                                color: 'red'
                            }}
                            text={convertString('Expense ', expense)} />

                        <BulletText
                            source={Icon.squareIcon}
                            bulletTextStyle={{
                                fontSize: 10,
                                marginLeft: 5,
                                color: 'orange'
                            }}
                            text={convertString('Balance ', balance)} />
                    </View>
                </View>

                <View style={outerBox}>

                    <View style={sub_outerBox}>
                        <View style={innerBox}>
                            <ImageButton
                                source={Icon.incomeIcon}
                                text="Add Income"
                                onPress={() => this.props.navigation.navigate('addIncome')}
                            />
                        </View>

                        <View style={innerBox}>
                            <ImageButton
                                source={Icon.expenseIcon}
                                text="Add Expenses"
                                onPress={() => this.props.navigation.navigate('addExpense')}
                            />
                        </View>

                        <View style={innerBox}>
                            <ImageButton
                                source={Icon.transactionIcon}
                                text="All Transaction"
                                onPress={() => this.props.navigation.navigate('allTransaction')}
                            />
                        </View>
                    </View>

                    <View style={sub_outerBox}>
                        <View style={innerBox}>
                            <ImageButton
                                source={Icon.reportIcon}
                                text="Reports"
                            />
                        </View>

                        <View style={styles.innerBox}>
                            <ImageButton
                                source={Icon.settingIcon}
                                text="Settings"
                            />
                        </View>

                        <View style={styles.innerBox}>
                            <ImageButton
                                source={Icon.shareIcon}
                                text="Share"
                            />
                        </View>
                    </View>

                </View>

                <View style={second_sub_outerBox} >

                </View>

            </View >
        );
    }
}

const styles = {
    outerBox: {
        flex: 1
    },
    sub_outerBox: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#708090',
        borderTopWidth: 1
    },
    second_sub_outerBox: {
        flex: 0.2,
        borderColor: '#708090',
        borderTopWidth: 1
    },
    innerBox: {
        flex: 1,
        flexDirection: 'column',
        borderColor: '#708090',
        borderLeftWidth: 1
    },
    chartTextContentStyle: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    chartTextStyle: {
        fontSize: 13
    }
}

const mapStateToProps = (state) => {
    //console.log("here main map state to pros >> ", JSON.stringify(state.main.main));
    return state.main;
}

export default connect(mapStateToProps, { fetchAmount })(MainScreen);