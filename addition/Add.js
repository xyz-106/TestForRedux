import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import addAction from './src/Action/addAction';
import { connect } from 'react-redux';


class FormDataStoreInRedux extends Component {

    checkNumber(checkNum) {
        if(checkNum<0){
            return checkNum= -(checkNum)
        }
        else{
            return checkNum
        }
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{ alignSelf: 'center', height: 40, borderColor: 'gray', width: '70%', backgroundColor: '#ffebcd', marginTop: 30 }}
                    onChangeText={(text) => { this.setState({ number_one: text }) }} />
                <TextInput
                    style={{ alignSelf: 'center', height: 40, borderColor: 'gray', width: '70%', backgroundColor: '#ffebcd', marginTop: 30 }}
                    onChangeText={(text) => { this.setState({ number_two: text }) }} />
                <View style={{ flexDirection: "row", justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#ffebcd', width: 50, height: 40, marginTop: 50, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}
                        onPress={() => this.props.addNumber(this.state.number_one, this.state.number_two)}
                    >
                        <Text>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#ffebcd', width: 70, height: 40, marginTop: 50, justifyContent: 'center', alignSelf: 'center', alignItems: 'center', marginLeft: 10 }}
                        onPress={() => this.props.substractNumber(this.state.number_one, this.state.number_two)}
                    >
                        <Text>Substract</Text>
                    </TouchableOpacity>
                </View>
                
                <Text style={{ marginTop: 10 }}>
                    Sum Result is {this.props.sum}
                </Text>
                <Text style={{marginTop:20}}>
                    Substract Result is {this.checkNumber(this.props.substract)}
                </Text>
            </View>
        )
    }

}
const bindState = (state) => {
    return {
        number_one: state.addReducer.number_one,
        number_two: state.addReducer.number_two,
        sum: state.addReducer.sum,
        substract:state.addReducer.substract,
    }
}
const bindDispatch = (dispatch) => {
    return {
        addNumber: (number_one, number_two) => dispatch(addAction.addNumber(number_one, number_two)),
        substractNumber: (number_one, number_two) => dispatch(addAction.substractNumber(number_one, number_two))
    }
}

export default connect(bindState, bindDispatch)(FormDataStoreInRedux);