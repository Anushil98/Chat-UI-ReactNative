import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    clear = () => {
    this.setState(prevState=>({
            messageText:'',
            addMessage:prevState.addMessage
    }))
    }
    render(){
    return(
    <View style={styles.main}>
            <TextInput multiline style={{borderWidth:1,width:windowWidth*0.8}}
            value={this.state.messageText}
            clearButtonMode='always'
            onChangeText ={text => this.changeText(text)} />
            <View style={{borderWidth:1,width:0.2*windowWidth,flexDirection:'row',justifyContent:"center"}}>
            <TouchableOpacity onPress={() => {this.state.addMessage(this.state.messageText);this.clear()}}>
            <Text>Send</Text>
            </TouchableOpacity>
            </View>
    </View>
    )
    }
}