import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class Button extends Component {

    render() {

        const { containerStyle, textStyle } = styles;

        return (
            <View>
                <TouchableOpacity
                    style={containerStyle}
                    onPress={this.props.onPress}
                    activeOpacity={1}
                >
                    <Text style={textStyle}>{this.props.text}</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = {
    containerStyle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#708090',
        borderColor: '#708090',
        borderWidth: 2,
        borderRadius: 9,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    textStyle: {
        color: '#fff',
        fontSize: 18
    }
}

export default Button;