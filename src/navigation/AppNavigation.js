import React from "react";
import { Button } from 'react-native';
import { createStackNavigator } from "react-navigation";

import MainScreen from '../container/MainScreen';
import AddIncomeScreen from '../container/AddIncomeScreen';
import AllTransaction from '../container/AllTransaction';
import AddExpenseScreen from '../container/AddExpenseScreen';
import FiltersScreen from '../container/FiltersScreen';

const AppNavigator = createStackNavigator(
    {
        Main: {
            screen: MainScreen,
            navigationOptions: (/* { navigation } */) => ({
                // headerTitle instead of title
                headerTitle: 'Daily Expenses Manager',
                headerStyle: {
                    backgroundColor: '#708090',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            })
        },
        addIncome: {
            screen: AddIncomeScreen,
            navigationOptions: () => ({
                headerTitle: 'Add Income',
                headerStyle: {
                    backgroundColor: '#708090',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: null
            })
        },
        allTransaction: {
            screen: AllTransaction,
            navigationOptions: () => ({
                headerTitle: 'All Transaction',
                headerStyle: {
                    backgroundColor: '#708090',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: null
            })
        },
        addExpense: {
            screen: AddExpenseScreen,
            navigationOptions: () => ({
                headerTitle: 'Add Expense',
                headerStyle: {
                    backgroundColor: '#708090',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: null
            })
        },
        filters: {
            screen: FiltersScreen,
            navigationOptions: () => ({
                headerTitle: 'Filters',
                headerStyle: {
                    backgroundColor: '#708090',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerLeft: null
            })
        }
    }, { initialRouteName: 'Main' }
);

export default AppNavigator;