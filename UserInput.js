import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
        main:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
        }
})

export default class UserInput extends React.Component{

    constructor(props){
        super(props)
        this.state={
            addMessage: props.addMessageFunc,
            messageText:""
        }
    }
    changeText = (text) => {
        this.setState(prevState=>({
            messageText: text,
            addMessage: prevState.addMessage
        }))
    }
    render(){
    return(
    <View style={styles.main}>
            <TextInput multiline onChangeText ={text => this.changeText(text)} />
            <TouchableOpacity onPress={() => this.state.addMessage(this.state.messageText)}>
            <Text>Send</Text>
            </TouchableOpacity>
    </View>
    )
    }
}