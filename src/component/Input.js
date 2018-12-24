import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {

    const { textInputStyle, textInputContainerStyle } = styles;

    return (
        <View style={textInputContainerStyle}>
            <TextInput
                style={textInputStyle}
                placeholder={props.placeholder}
                placeholderTextColor='#708090'
                value={props.textValue}
                onChangeText={props.onChangeText}
            />
        </View>
    );
}

const styles = {
    textInputContainerStyle: {
        height: 50,
        justifyContent: 'center',
        borderColor: '#708090',
        borderWidth: 2,
        borderRadius: 9,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    textInputStyle: {
        //backgroundColor: 'green',
        paddingTop: 0,
        paddingBottom: 4,
        fontSize: 18
    }
}
export default Input;