import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import SubFlatListItem from './SubFlatListItem';

import { getMonthAndDateFormat } from '../util/dateTimeUtil';

class FlatListItem extends Component {

    subFlatListItem(item) {
        return (
            <SubFlatListItem transaction={item} />
        )
    }

    render() {

        const { item } = this.props;
        const { flatListItemStyle } = styles;

        return (
            <View style={{ flex: 1 }}>
                <Text style={flatListItemStyle}>{getMonthAndDateFormat(item.value[0].expenseDate || item.value[0].incomeDate)}</Text>
                <FlatList
                    data={item.value}
                    extraData={item.value}
                    keyExtractor={(item) => item.uid.toString()}
                    renderItem={({ item }) => this.subFlatListItem(item)}
                />
            </View >
        );
    }
}

const styles = {
    flatListItemStyle: {
        backgroundColor: '#708090',
        color: '#fff',
        padding: 8,
        fontSize: 17
    }
}

export default FlatListItem;