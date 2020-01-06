// import React, {Component} from 'react';
import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  FlatList,
  ListItem,
} from 'react-native';
// import {ListItem} from 'react-native-elements';
import axios from 'axios';

export default class pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pets: [], isLoading: true};
  }

  componentDidMount() {
    console.log('pet');
    axios
      .get('http://20.4.12.222:8000/pet')
      .then(res => {
        const pets = res.data;
        this.setState({pets: pets});
        // console.log(pets);
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderItem = ({item}) => {
      console.log(item)
  return <ListItem title={item.name} />;}
  render() {
    return (
      <View>
        <View>
          <Text> Pet List </Text>
        </View>
        <FlatList
          keyExtractor={({id}, index) => id}
          data={this.state.pets}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
