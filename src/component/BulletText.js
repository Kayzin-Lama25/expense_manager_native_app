import React from 'react';
import { View, Text, Image } from 'react-native';

const BulletText = (props) => {
    const { bulletContainerStyle, bulletImageStyle } = styles;
    return (
        <View style={bulletContainerStyle}>
            <Image source={props.source} style={bulletImageStyle} />
            <Text style={props.bulletTextStyle}>{props.text}</Text>
        </View>
    );
}

const styles = {
    bulletContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bulletImageStyle: {
        width: 10,
        height: 10
    },
    /* bulletTextStyle: {
        fontSize: 10,
        marginLeft: 5
    } */
}

export default BulletText;