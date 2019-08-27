import React, { Component } from 'react'
import {StyleSheet,View, TextInput, Button, Text}  from "react-native"


export default class Input extends Component {
    state={
        inputText: "",
        users:['john', 'Doe', 'lisa']
    }
    handleTextChange=(event)=>{
      this.setState({inputText:event})
    }
    
    handleAddUser= ()=>{
       this.setState(prevState=>{
           return {
               inputText:"",
               users:[...prevState.users, prevState.inputText]
           }
       })
    }

    render() {
        return (
            <View style={styles.inputWrapper}>
                  <TextInput
                 value={this.state.inputText}
                 style={styles.input}
                 onChangeText= {this.handleTextChange}
              />
                <Button title='Add user'
                onPress= {this.handleAddUser}
                />
                {
                    this.state.users.map((user, i)=>(
                      <Text style={styles.user} key={i}> {user}</Text>
                 ))
                }
            </View>
        )
    }
}

const styles= StyleSheet.create({
    inputWrapper:{
     width:"100%"
    },
    input:{
        width:"100%",
        backgroundColor: "lightgray",
        marginTop: 20,
        fontSize: 20,
        padding: 10,
        marginBottom: 20,
    } ,
    user:{
     fontSize:30,
     borderWidth: 1,
     borderColor: "#cecece",
     padding: 10,
     marginBottom: 1,
    }
})