import React, { Component } from 'react';
import { View, Text } from 'react-native';

import FilterType from '../component/FilterType';
import Button from '../component/Button';

class FiltersScreen extends Component {

    componentWillMount() {

    }

    render() {

        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <FilterType />
                    <FilterType />
                    <FilterType />
                </View>

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

export default FiltersScreen;