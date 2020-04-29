import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
const styles = StyleSheet.create({
        main:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
        }
    })
export default class MessageList extends React.Component{

    constructor(props){
        super(props)
        this.state={
            user: props.user,
            receiver: props.receiver
        }
        console.log(props.messageObject+"From messageList")
        this.messageObject = props.messageObject
        this.messages = messageObject.getMessages(prop.user,prop.receiver)
    }
    render(){
    return(
    <FlatList
        data={this.messages}
        renderItem={({ item }) => <Text>item.message</Text>}
        keyExtractor={item => item.id}
    />
    )
    }
}