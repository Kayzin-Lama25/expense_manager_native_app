import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';

import Icons from '../theme/Icon';
import FlatListItem from '../component/FlatListItem';
import SortModal from '../component/SortModal';

import { fetchAllTransaction, getAllTransactionBySortType, selectRadioValue, openModal, closeModal } from '../action';

class AllTransaction extends Component {

    constructor(props) {
        super(props);
        //this.state = { modalVisible: false, value: 0 };
    }

    renderFlatView(item) {
        return (
            <FlatListItem item={item} />
        );
    }

    componentWillMount() {
        this.props.fetchAllTransaction();
    }

    render() {

        const { stickContentTopStyle,
            flatViewStyle,
            stickButtonStyle,
            imageStyle,
            textStyle,
            stickContentBottomStyle } = styles;

        /*         const strArr = [
                    { month: 'Jan', value: [{ name: 'a', age: 23 }, { name: 'kkk', age: 12 }] },
                    { month: 'Feb', value: [{ name: 'b', age: 43 }, { name: 'bbb', age: 34 }] },
                    { month: 'March', value: [{ name: 'b', age: 43 }, { name: 'bbb', age: 34 }] },
                    { month: 'April', value: [{ name: 'b', age: 43 }, { name: 'bbb', age: 34 }] },
                    { month: 'May', value: [{ name: 'b', age: 43 }, { name: 'bbb', age: 34 }] },
                    { month: 'Jun', value: [{ name: 'b', age: 43 }, { name: 'bbb', age: 34 }] },
                    { month: 'July', value: [{ name: 'b', age: 43 }, { name: 'bbb', age: 34 }] },
                    { month: 'Aug', value: [{ name: 'b', age: 43 }, { name: 'bbb', age: 34 }] },
                    { month: 'Sep', value: [{ name: 'b', age: 43 }, { name: 'bbb', age: 34 }] }
                ]; */

        const { filterTransaction, modalVisible, value } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <View style={stickContentTopStyle}>
                    <TouchableOpacity
                        style={stickButtonStyle}
                        onPress={() => this.props.openModal()}
                    >
                        <Image
                            source={Icons.sortIcon}
                            style={imageStyle}
                        />
                        <Text style={textStyle}>Sort</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={stickButtonStyle}
                        onPress={() => this.props.navigation.navigate('filters')}
                    >
                        <Image
                            source={Icons.filterIcon}
                            style={imageStyle}
                        />
                        <Text style={textStyle}>Filter</Text>
                    </TouchableOpacity>
                </View>

                <View style={flatViewStyle}>
                    <FlatList
                        data={filterTransaction}
                        extraData={filterTransaction}
                        keyExtractor={(item) => item.month.toString()}
                        renderItem={({ item }) => this.renderFlatView(item)}
                    />
                </View>

                <View style={stickContentBottomStyle}>
                    <TouchableOpacity style={stickButtonStyle}>
                        <Image
                            source={Icons.excelIcon}
                            style={imageStyle}
                        />
                        <Text style={textStyle}>Save Excel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={stickButtonStyle}>
                        <Image
                            source={Icons.pdfIcon}
                            style={imageStyle}
                        />
                        <Text style={textStyle}>Save PDF</Text>
                    </TouchableOpacity>
                </View>

                <SortModal
                    visible={modalVisible}
                    onRequestClose={() => this.props.closeModal()}
                    isSelected={value}
                    onPressRadio={(val) => this.props.selectRadioValue(val)}
                    onPress={() => this.props.getAllTransactionBySortType(value)}
                />

            </View >
        );
    }
}

const styles = {
    stickContentTopStyle: {
        flex: 0.1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#b3b3b3',
        shadowColor: '#000',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        shadowOpacity: 0.1,
        elevation: 2
    },
    stickContentBottomStyle: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopWidth: 1,
        borderTopColor: '#b3b3b3',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
    },
    stickButtonStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#b3b3b3',
        borderLeftWidth: 1
    },
    imageStyle: {
        marginRight: 5
    },
    textStyle: {
        fontSize: 18,
        color: '#4E5964'
    },
    flatViewStyle: {
        flex: 1,
        flexDirection: 'row'
    }
}

const mapStateToProps = (state) => {
    //console.log("map state to props in all transaction >> ", JSON.stringify(state));
    const { filterTransaction, modalVisible, value } = state.transaction;
    return { filterTransaction, modalVisible, value };
}

export default connect(mapStateToProps, { fetchAllTransaction, getAllTransactionBySortType, selectRadioValue, openModal, closeModal })(AllTransaction);