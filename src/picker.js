import React, { Component } from 'react'
import {StyleSheet,View, TextInput, Button, Text, Picker, Slider}  from "react-native"


export default class PickerComponent extends Component {
    state={
        lanuage:"english",
        value:50
    }

    render() {
        return (
          <View>
              <Picker 
              style={{width:'100%'}}
               selectedValue= {this.state.lanuage}
               onValueChange= {(itemValue,itemIndex )=>this.setState({lanuage:itemValue})}>
                  <Picker.Item label='spanish' value='spanish'/>
                  <Picker.Item label='english' value='english'/>

              </Picker>
              <Slider 
              value={5}
              maximumValue={10}
              minimumValue={0}
              />
          </View>
        )
    }
}

const styles= StyleSheet.create({
})