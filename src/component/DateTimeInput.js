import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

class DateTimeInput extends Component {

    state = { isVisible: false };

    render() {

        const { textInputStyle, imageStyle, textInputContainerStyle } = styles;

        return (
            <View>
                <TouchableOpacity
                    style={textInputContainerStyle}
                    onPress={this.showDateTimePicker}
                >
                    <Image source={this.props.source} style={imageStyle} />
                    <TextInput
                        style={textInputStyle}
                        value={this.props.todayDateValue}
                        editable={false}
                    //onChangeText={this.props.onChangeText}
                    />
                </TouchableOpacity>
                <DateTimePicker
                    isVisible={this.state.isVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                    mode={this.props.mode}
                />
            </View >
        );
    }

    showDateTimePicker = () => this.setState({ isVisible: true });

    hideDateTimePicker = () => this.setState({ isVisible: false });

    handleDatePicked = (date) => {
        this.props.onChangeText(date);
        this.hideDateTimePicker();
    }
}

const styles = {
    textInputContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderColor: '#708090',
        borderWidth: 2,
        borderRadius: 9,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        marginLeft: 3
    },
    textInputStyle: {
        width: '88%',
        marginLeft: 5,
        //backgroundColor: 'green',
        paddingTop: 0,
        paddingBottom: 4,
        fontSize: 18,
        color: '#708090'
    }
}

export default DateTimeInput;
