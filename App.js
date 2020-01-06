/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import {View, Image, Text} from 'react-native';
import pet from './src/pet';


export default class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     name: 'Bobby',
  //     breed: '',
  //     age: 5,
  //     colour: 'red',
  //     next_checkup: '2019-12-09',
  //   };
  // }
  render() {
    return (
      <pet />
      // <View>
      //   <View style={{flex: 1}}>
      //   <Image
      //     style={{alignItems: "center", height: 200, width: 200}}
      //     source={require('./img/dog.jpg')}
      //   />
      //   </View>
      //   <View style={{flexDirection: "row", marginTop: 300, marginLeft: 50}}>
      //   <View style={{flex: 1}}>
      //     <Text>Name: {this.state.name} </Text>
      //     <Text>Breed: {this.state.breed} </Text>
      //     <Text>Age: {this.state.age} </Text>
      //   </View>
      //   <View style={{flex: 1}}>
      //     <Text style={{ fontSize: 15 }}>Colour: {this.state.colour} </Text>
      //     <Text>Next Checkup: {this.state.next_checkup} </Text>
      //   </View>
      //   </View>
      // </View>
    );
  }
}
