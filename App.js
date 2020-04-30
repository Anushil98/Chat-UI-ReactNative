import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,
    TouchableWithoutFeedback,Keyboard,Image } from 'react-native';

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
    user:"Anushil",
    receiver:"Anurima",
    messages: this.messageObject.getMessages("Anushil","Anurima")
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
        <View style={styles.container}>
        <View style={styles.header}>
            <View style={{marginLeft:10,flexDirection:'row'}}>
                <Image style={styles.user} source={require('./assets/femaleUser.png')}/>
                <View>
                <Text style={styles.receiver}>{this.state.receiver}</Text>
                </View>
            </View>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "padding"} style={styles.messageArea} keyboardVerticalOffset={-500}>
        <Image style={{position:'absolute'}} source={require('./assets/defaultwallpaper.png')}/>
        <View style={styles.messageList}>

            <View>
                <MessageList user={this.state.user} messages={this.state.messages}/>
            </View>
        </View>
        <View style={styles.input}>
              <UserInput addMessageFunc={this.addMessage} />
        </View>
        </KeyboardAvoidingView>
        </View>
        )
    }
}
const seagreen='#2e8b57'
const azure ='#f0ffff'
const styles = StyleSheet.create({
  container: {
  marginTop:Constants.statusBarHeight,
  flex:1,
  backgroundColor:seagreen
  },
  header:{
  justifyContent:'center',
  width:windowWidth,
  height:70
  },user:{
  width:65,
  height:50,
  borderRadius:2000,
  resizeMode:'contain',
  },
  receiver:{
  top:5,
  fontSize:25,
  color:azure
  },
  messageArea:{
  flex:1,
  justifyContent:'space-between',
  },
  messageList:{
  flex:6
  },
  input:{
  }
});