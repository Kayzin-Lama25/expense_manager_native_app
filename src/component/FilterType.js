import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

class FilterType extends Component {


    render() {

        console.log("filter type >> ", JSON.stringify(this.props.filterData));

        return (
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#808080', justifyContent: 'center' }}>
                    <Text style={{ marginBottom: 8, marginTop: 5, marginLeft: 8, fontSize: 18, color: '#fff' }}>{this.props.titleText}</Text>
                </View>
                <View style={{ borderBottomColor: '#DCDCDC', borderBottomWidth: 1 }}>

                    {this.props.filterData.map((obj, i) => {
                        return (
                            <RadioForm
                                formHorizontal={true}
                                animation={true}
                                style={{
                                    justifyContent: 'flex-start',
                                    marginTop: 15,
                                    marginBottom: 10,
                                    marginLeft: 5,
                                    marginRight: 5
                                }}
                                key={i}
                            >
                                {obj.map((value, index) => {
                                    return (
                                        <View
                                            style={{
                                                flex: 1,
                                                flexDirection: 'row'
                                            }}
                                            key={index}
                                        >
                                            <View style={{
                                                flex: 1,
                                                flexDirection: 'column'
                                            }}>
                                                <RadioButton
                                                    labelHorizontal={true}
                                                    key={index}
                                                >
                                                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                                                    <RadioButtonInput
                                                        obj={value}
                                                        index={index}
                                                        borderWidth={1}
                                                        buttonInnerColor={'#708090'}
                                                        buttonOuterColor={'#708090'}
                                                        buttonSize={10}
                                                        buttonOuterSize={20}
                                                        buttonStyle={{}}
                                                        buttonWrapStyle={{ marginLeft: 13 }}
                                                    />
                                                    <RadioButtonLabel
                                                        obj={value}
                                                        index={index}
                                                        labelHorizontal={true}
                                                        labelStyle={{ fontSize: 16, color: '#708090' }}
                                                        labelWrapStyle={{}}
                                                    />
                                                </RadioButton>
                                            </View>
                                        </View>
                                    );
                                })}
                            </RadioForm>
                        );
                    })}
                </View>
            </View >
        );
    }
}

export default FilterType;