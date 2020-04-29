import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Message from "./Message.js";
import MessageList from "./MessageList.js";
import UserInput from "./UserInput.js";

export default class App extends React.Component{

    constructor(props){
    super(props)
    this.messageObject = new Message
    this.state={
    user:"user1",
    receiver:"user2",
    messages: this.messageObject.getMessages("user1","user2")
    }
    }

    addMessage = (message) => {
        this.messageObject.addMessage(this.state.user,this.state.receiver,message)
        this.setState(prevState => ({
        user:prevState.user,
        receiver:prevState.receiver,
        messages: [...this.messageObject.getMessages(prevState.user,prevState.receiver)]
        }))
    }

    render(){
        console.log("Re rendering")
        console.log(this.state.messages)
        return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{borderWidth:1}}>
            <View style={{borderWidth:1,marginTop:50}}>
                <View>
                <Text>{this.state.receiver}</Text>
                </View>
            </View>
            <View style={{borderWidth:1}}>
                <MessageList messages={this.state.messages}/>
            </View>
            <View style={{borderWidth:1}}>
                <Text>hola</Text>
                <UserInput addMessageFunc={this.addMessage} />
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
