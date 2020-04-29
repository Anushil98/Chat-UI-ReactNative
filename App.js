import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Message from "./Message.js";
import MessageList from "./MessageList.js";
import UserInput from "./UserInput.js";
import Constants from 'expo-constants';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
        return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{borderWidth:1,height:windowHeight}}>


        <View style={{borderWidth:1,height:windowHeight*0.855}}>
            <View style={{borderWidth:1,marginTop:50}}>
                <View>
                <Text>{this.state.receiver}</Text>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
                <MessageList messages={this.state.messages}/>
            </View>
            </TouchableWithoutFeedback>
        </View>

        <View>
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
