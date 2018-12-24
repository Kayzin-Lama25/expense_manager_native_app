import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const ImageButton = (props) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
            <Image source={props.source} />
            <Text style={styles.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        color: '#708090',
        marginTop: 10
    }
}

export default ImageButton;