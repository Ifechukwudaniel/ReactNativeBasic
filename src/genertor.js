import React from 'react';
import {StyleSheet ,Text,View, Button , TouchableWithoutFeedback, TouchableOpacity} from "react-native"

const Generator = (props) => (
  <TouchableOpacity 
  style={styles.nav}
   onPress={props.add}
// //   onLongPress= {()=>alert("long")}
// //   onPressIn= {()=>alert("Press in")}
// //   onPressOut = {()=>alert("Press Out")}
//   delayLongPress={3000}
  >
  <View >
     <Text style={styles.text}> Click her to add random number</Text>
   </View>
   </TouchableOpacity>
);

const styles = StyleSheet.create({
    nav: {
        backgroundColor: 'skyblue',
        width: '100%',
        marginBottom: 5,
        padding: 10,
    },
    text:{
     textAlign:'center'
    }
});


export default Generator