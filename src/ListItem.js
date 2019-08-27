import React from 'react';
import {StyleSheet ,Text,View, Button , TouchableWithoutFeedback,} from "react-native"

const ListItem = (props) => {
    return(
        props.items.map((item, i)=>(
            <TouchableWithoutFeedback  key={i} onPress={()=>props.remove(item)}>
            <View style={styles.nav}>
               <Text style={styles.text}>{item}</Text>
             </View>
             </TouchableWithoutFeedback>
        ))
)
};

const styles = StyleSheet.create({
    nav: {
        backgroundColor: '#cecece',
        width: '100%',
        marginBottom: 5,
        padding: 10,
    },
    text:{
     textAlign:'center'
    }
});


export default ListItem