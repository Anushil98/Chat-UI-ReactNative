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
        console.log("constructing messageList")
    }
    render(){
    return(
    <View style={{borderWidth:1}}>
    <FlatList
        data={this.props.messages}
        renderItem={({ item }) => <Text>{item.message}</Text>}
        keyExtractor={item => item.id.toString()}
    />
    </View>
    )
    }
}