import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
        main:{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height:45,
            marginBottom:3
        },
        input:{
            width:windowWidth*0.86,
            borderRadius:10,
            backgroundColor:'#f0ffff',
            margin:3,
            justifyContent:"center",
        },
        user:{
          width:40,
          height:40,
          borderRadius:2000,
          backgroundColor:'transparent',
        },
        send:{
            flexDirection:'column',
            justifyContent:"center"
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
    clear = () => {
    this.setState(prevState=>({
            messageText:'',
            addMessage:prevState.addMessage
    }))
    }
    render(){
    return(
    <View style={styles.main}>
            <View style={styles.input}>
                <TextInput multiline style={{marginLeft:10,marginRight:10}}
                placeholder="Type The message here"
                value={this.state.messageText}
                clearButtonMode='always'
                onChangeText ={text => this.changeText(text)} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-around',width:0.1*windowWidth,}}>
            <View style={styles.send}>
            <TouchableOpacity onPress={() => {this.state.addMessage(this.state.messageText);this.clear()}}>
            <Image source={require("./assets/sendButton.png")} style={styles.user} resizeMode='stretch' />
            </TouchableOpacity>
            </View>
            </View>
    </View>
    )
    }
}