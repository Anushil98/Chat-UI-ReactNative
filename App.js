import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Message from "./Message.js";
import MessageList from "./MessageList.js";
import UserInput from "./UserInput.js";

export default class App extends React.Component{
    constructor(props){
    super(props)
    this.state={
    user:"user1",
    receiver:"user2"
    }
    this.messageObject = new Message
    console.log(this.messageObject+"From App.js constructor")
    }
    render(){

        return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{borderWidth:1}}>
            <View style={{borderWidth:1}}>
                <Text>{this.state.receiver}</Text>
            </View>
            <View style={{borderWidth:1}}>
                <MessageList user={this.state.user} receiver={this.state.receiver} messageObject={this.messageObject}/>
            </View>
            <View style={{borderWidth:1}}>
            <Text>hola</Text>
                <UserInput user={this.state.user} receiver={this.state.receiver}
                 messageObject={this.messageObject}/>
            </View>

        </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
