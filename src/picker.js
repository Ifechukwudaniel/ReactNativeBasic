import React, { Component } from 'react'
import {StyleSheet,View, TextInput, Button, Text, Picker, Slider, ActivityIndicator, Image}  from "react-native"


export default class PickerComponent extends Component {
    state={
        lanuage:"english",
        value:8
    }

    handleSliderChange=(value)=>{
      this.setState({value: parseInt(value)}) 
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
              value={this.state.value}
              maximumValue={10}
              minimumValue={0}
              step={2}
              onValueChange={this.handleSliderChange}
              />
              <ActivityIndicator
              size={170}
              color="#00ffff"
              animating={true}
              />
          </View>
        )
    }
}

const styles= StyleSheet.create({
})