import React, { Component } from 'react';
import { View, Picker } from 'react-native';

class PickerSelect extends Component {

    render() {

        const { containerStyle, pickerStyle } = styles;

        return (
            <View style={containerStyle} >
                <Picker
                    style={pickerStyle}
                    onValueChange={this.props.onChangeText}
                    selectedValue={this.props.selectedValue}
                >
                    {
                        this.props.pickerItem.map((picker, value) => {
                            return (
                                <Picker.Item
                                    label={picker.toString()}
                                    value={picker.toString()}
                                    key={value.toString()}
                                />
                            );
                        })
                    }

                </Picker>
            </View >
        );
    }
}

const styles = {
    containerStyle: {
        height: 50,
        justifyContent: 'center',
        borderColor: '#708090',
        borderWidth: 2,
        borderRadius: 9,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    pickerStyle: {
        width: '97%',
        //backgroundColor: 'green',
        color: '#708090',
        padding: 0
    }
}

export default PickerSelect;