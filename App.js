
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,
    TouchableWithoutFeedback,Keyboard,TouchableOpacity,Image } from 'react-native';

import Message from "./Message.js";
import MessageList from "./MessageList.js";
import UserInput from "./UserInput.js";
import Constants from 'expo-constants';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class App extends React.Component{
    constructor(){
    super()
    this.messageObject =new Message
    this.state={
    user:'',
    receiver:''
    }
    }
    addMessage = (message) => {
        this.messageObject.addMessage(this.state.user,this.state.receiver,message)
    }
    getMessages = () =>{
        return this.messageObject.getMessages(this.state.user,this.state.receiver)
    }
    changeUser=(user,receiver)=>{
    this.setState({
    user:user,
    receiver:receiver
    })
    }
    returnMain = () => {
    this.setState(prevState=>({
        user:'',
        receiver:''
    }))
    }
    render(){
        if(this.state.user==''){
        alert("Select any one user to replicate experience!!")
        return (
        <View style={styles.mainContainer}>
            <View style={styles.mainAppHeader}>
                        <View style={{marginLeft:10,flexDirection:'row'}}>
                            <View>
                            <Text style={styles.receiver}>CopyChat</Text>
                            </View>
                        </View>
            </View>
            <View style={styles.userList}>
            <View style={{height:70,padding:10,borderBottomWidth:1,justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>this.changeUser('Anurima','Anushil')}><Text>Anurima</Text></TouchableOpacity>
            </View>
            <View style={{height:70,padding:10,borderBottomWidth:1,justifyContent:'center'}}>
            <TouchableOpacity onPress={()=>this.changeUser('Anushil','Anurima')}><Text>Anushil</Text></TouchableOpacity>
            </View>
            </View>
        </View>
        )
        }
        else{
        return (
        <Main user={this.state.user} receiver={this.state.receiver} getMessageFunc={this.getMessages}
            addMessageFunc={this.addMessage} mainMenuFunc={this.returnMain} />
        )
        }
    }

}
class Main extends React.Component{

    constructor(props){
    super(props)
    this.messageObject = new Message
    this.state={
    user:props.user,
    receiver:props.receiver,
    messages: props.getMessageFunc()
    }
    }

    addMessage = (message) => {
        this.props.addMessageFunc(message)
        this.setState(prevState => ({
        user:prevState.user,
        receiver:prevState.receiver,
        messages: [...this.props.getMessageFunc()]
        }))

    }

    render(){
        return (
        <View style={[styles.container]}>
        <View style={styles.header}>
            <View style={{marginLeft:10,flexDirection:'row'}}>
                <View>
                <TouchableOpacity onPress={this.props.mainMenuFunc}><Image style={{height:50,width:30,resizeMode:'contain'}} source={require("./assets/backImage.png")}/></TouchableOpacity>
                </View>
                <Image style={styles.user} source={this.state.receiver=='Anushil'?require("./assets/maleUser.jpg"):require("./assets/femaleUser.png")}/>
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
  mainContainer:{
    marginTop:Constants.statusBarHeight,
    flex:1,
    backgroundColor:seagreen
  },
  mainAppHeader:{
    justifyContent:'center',
    width:windowWidth,
    flex:1
  },
  container: {
  marginTop:Constants.statusBarHeight,
  flex:1,
  backgroundColor:seagreen
  },
  header:{
  justifyContent:'center',
  width:windowWidth,
  height:70
  },
  user:{
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
  },
  userList:{
  flex:8,
  backgroundColor: azure
  }
});