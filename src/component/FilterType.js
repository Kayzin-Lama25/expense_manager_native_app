import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

class FilterType extends Component {

    render() {

        var radio_props = [
            { label: 'All', value: 0 },
            { label: 'Income', value: 1 },
            { label: 'Expense', value: 2 },
            { label: 'Month', value: 3 },
            { label: 'Year', value: 4 },
            { label: 'Year', value: 5 },
            { label: 'Year', value: 6 },
            { label: 'Year', value: 7 }
        ];

        return (
            <View style={{ flex: 0.17 }}>
                <View style={{ backgroundColor: '#808080', justifyContent: 'center' }}>
                    <Text style={{ marginBottom: 8, marginTop: 5, marginLeft: 8, fontSize: 18, color: '#fff' }}>Expense Type</Text>
                </View>
                <View style={{ borderBottomColor: '#DCDCDC', borderBottomWidth: 1 }}>

                    <RadioForm
                        formHorizontal={true}
                        animation={true}
                        style={{
                            justifyContent: 'space-between',
                            marginTop: 15,
                            marginBottom: 10,
                            marginLeft: 5,
                            marginRight: 5
                        }}
                    >
                        {radio_props.map((obj, i) => {
                            return (
                                <View>
                                    <RadioButton
                                        labelHorizontal={true}
                                        key={i}
                                    >
                                        {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                        <RadioButtonInput
                                            obj={obj}
                                            index={i}
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
                                            labelStyle={{ fontSize: 16, color: '#708090' }}
                                            labelWrapStyle={{}}
                                        />
                                    </RadioButton>
                                </View>
                            );
                        })}
                    </RadioForm>
                </View>
            </View >
        );
    }
}

export default FilterType;