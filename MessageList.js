import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
const styles = StyleSheet.create({
        main:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
        },
        messageboxuser:{
        flexDirection:'row',
        justifyContent:'flex-end',
        margin:5,
        },
        messageboxreceiver:{
        flexDirection:'row',
        justifyContent:'flex-start',
        margin:5
        },
        receiverTextArea:{
        backgroundColor:'#f0ffff',
        padding:15,
        borderRadius:10,
        borderBottomRightRadius:-10
        },
        userTextArea:{
        backgroundColor:'#C1F09B',
        padding:15,
        borderRadius:10,
        borderBottomRightRadius:-10
        }
    })
export default class MessageList extends React.Component{

    constructor(props){
        super(props)
        console.log("constructing messageList")
    }
    scrollToIndex = () => {
      this.flatListRef.scrollToIndex({animated: true, index: 3});
    }
    render(){
    return(
    <View>
    <FlatList
        ref={(ref) => { this.flatListRef = ref; }}
        inverted={true}
        data={this.props.messages.reverse()}
        renderItem={({ item }) =>
        <View style={this.props.user==item.receiver?styles.messageboxreceiver:styles.messageboxuser}>
        <View style={this.props.user==item.receiver?styles.receiverTextArea:styles.userTextArea}>
        <Text>{item.message}</Text>
        </View>
        </View>
        }
        keyExtractor={item => item.id.toString()}
    />
    </View>
    )
    }
}