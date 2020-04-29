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
            user: props.user,
            receiver:props.receiver,
            messageText:""
        }
        console.log("how bro how r u")

        this.addmessage = () => {
        props.messageObject.addMessage(props.user,props.receiver,this.state.messageText)
        prop.AppObject.render
        }
    }
    changeText = (text) => {
        this.setState(prevState=>(({
            user:prevState.user,
            receiver:prevState.receiver,
            messageText: text
        })))
    }
    render(){
    return(
    <View style={styles.main}>
            <TextInput multiline onChangeText ={text => this.changeText(text)} />
            <TouchableOpacity onPress={this.addmessage()}>
            <Text>Send</Text>
            </TouchableOpacity>
    </View>
    )
    }
}