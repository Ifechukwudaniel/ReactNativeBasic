import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Nav from './src/nav';
import Generator  from "./src/genertor"
import ListItem from "./src/ListItem"

class App extends Component {
  state={
     nameOfApp:"myApp nice App",
     random :[0,1,2]
  }
  handleAdd = ()=>{
   const random = Math.floor(Math.random()*100)+1
  this.setState(prevState=>{
    return {
      random: [ ...prevState.random,random]
    }
  })
  }
  handleRemove= (item)=>{
    const newRandomList =  this.state.random.filter((x)=> item!==x)
    this.setState({random:newRandomList})
  }
  render() {
    return (
      <View style={styles.mainView}>
        <Nav name={this.state.nameOfApp} />
        <View style={styles.basicView}>
          <Text style={styles.basicText}> Just testing</Text>
        </View>
        <View style={styles.basicView}>
          <Text style={styles.basicText}> React native is cool</Text>
        </View>
        <Generator add= {this.handleAdd}/>
        <ListItem items= {this.state.random} remove={this.handleRemove}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  basicView: {
    backgroundColor: 'green',
    width: '100%',
    marginBottom: 5,
  },
  basicText: {
    padding: 40,
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
});
export default App;
