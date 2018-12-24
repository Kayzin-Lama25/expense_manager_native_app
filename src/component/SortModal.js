import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import Button from '../component/Button';

class SortModal extends Component {

    render() {

        const { containerStyle,
            titleStyle,
            textStyle,
            radioContainerStyle,
            radioStyle } = styles;

        var radio_props = [
            { label: 'All', value: 0 },
            { label: 'Today', value: 1 },
            { label: 'Yesterday', value: 2 },
            { label: 'Last 7 days', value: 3 },
            { label: 'This Month', value: 4 },
            { label: 'Last Month', value: 5 }
        ];

        return (
            <Modal
                animationIn='slideInUp'
                backdropColor='black'
                backdropOpacity={0.7}
                transparent={true}
                isVisible={this.props.visible}
                onRequestClose={this.props.onRequestClose}
            >
                <View style={containerStyle}>
                    <Text style={titleStyle}>Sort By</Text>

                    <View style={radioContainerStyle}>
                        <RadioForm
                            formHorizontal={false}
                            animation={true}
                        >
                            {/* To create radio buttons, loop through your array of options */}
                            {radio_props.map((obj, i) => {
                                return (
                                    <RadioButton
                                        labelHorizontal={true}
                                        key={i}
                                        style={radioStyle}
                                    >
                                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                        <RadioButtonInput
                                            obj={obj}
                                            index={i}
                                            isSelected={this.props.isSelected == i}
                                            onPress={this.props.onPressRadio}
                                            borderWidth={1}
                                            buttonInnerColor={'#708090'}
                                            buttonOuterColor={'#708090'}
                                            buttonSize={10}
                                            buttonOuterSize={20}
                                            buttonStyle={{}}
                                            buttonWrapStyle={{ marginLeft: 13 }}
                                        />
                                        <RadioButtonLabel
                                            obj={obj}
                                            index={i}
                                            labelHorizontal={true}
                                            onPress={this.props.onPressRadio}
                                            labelStyle={{ fontSize: 16, color: '#708090' }}
                                            labelWrapStyle={{}}
                                        />
                                    </RadioButton>
                                );
                            })}

                        </RadioForm>

                        <Button
                            text='Submit'
                            onPress={this.props.onPress}
                        />

                    </View>

                </View>
            </Modal>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        marginTop: 85,
        marginBottom: 110,
        marginLeft: 43,
        marginRight: 43,
        backgroundColor: '#D3D3D3',
        borderColor: 'green',
        borderRadius: 10,
        elevation: 4,
        shadowColor: '#D3D3D3'
    },
    titleStyle: {
        fontSize: 18,
        color: '#708090',
        textAlign: 'center',
        marginTop: 10
    },
    radioContainerStyle: {
        flex: 1,
        marginTop: 5
    },
    radioStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#C0C0C0',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 13
    }
}

export default SortModal;