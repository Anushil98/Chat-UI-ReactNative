import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
const styles = StyleSheet.create({
        main:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
        },
        messagebox:{
        borderWidth:1,
        flexDirection:'row'
        }
    })
export default class MessageList extends React.Component{

    constructor(props){
        super(props)
        console.log("constructing messageList")
    }
    render(){
    return(
    <View style={{borderWidth:1}}>
    <FlatList
        data={this.props.messages}
        renderItem={({ item }) =>
        <View style={[styles.messagebox,{justifyContent:this.props.user==item.receiver?'flex-start':'flex-end'}]}>
        <Text>{item.message}</Text></View>
        }
        keyExtractor={item => item.id.toString()}
    />
    </View>
    )
    }
}