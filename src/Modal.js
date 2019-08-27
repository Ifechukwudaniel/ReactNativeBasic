import React, { Component } from 'react'
import {StyleSheet,View, TextInput, Button, Text, Modal}  from "react-native"

export default class ModalComponenent extends Component {
     state={
         modal:false
     }
     handleModal = ()=>{
         const {modal }= this.state
         this.setState({ modal :!modal})
     }
    render() {
        return (
           <View>
               <Button title='Show Modal' onPress={this.handleModal} />
               <Modal visible={this.state.modal} animationType= "slide" onShow={()=>alert("hdhhdh")}>
                    <View style={{width:"100%", backgroundColor: "red", marginTop: 50,}}>
                        <Text> My Modal</Text>
                    <Button title='hide Modal' onPress={this.handleModal} />
                    </View>
               </Modal>
           </View>
        )
    }
}
