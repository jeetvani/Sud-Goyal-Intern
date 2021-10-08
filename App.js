
import axios from 'axios';
import React, { useState } from 'react';
import randomWords from 'random-words'
import { StyleSheet, Text, View, TextInput, StatusBar, Dimensions, Image, TouchableOpacity, FlatList, RefreshControl } from 'react-native';


export default class App extends React.Component {
  state = {
    data: [{ name: 'Intro' }]
    , searchinput: '',
    
  }
  Search = async () => {


    var CheckIndex = 0
    
 
var srarray = []

    while (CheckIndex < this.state.data.length) {
      const k = JSON.stringify(this.state.data[CheckIndex].name).search(this.state.searchinput)
      console.log(k);
      if (k == -1) {
  console.log(false);

      }
      else {
        srarray.push({name:JSON.stringify(this.state.data[CheckIndex].name)})
      }
      CheckIndex++
      console.log(srarray);
      
    }
this.setState({data:srarray})
  }
  AddItem = async () => {
    this.setState({ data: [...this.state.data, { name: randomWords() }] })

    // this.setState({data:this.state.data.push({name:'adhfahfj'})})
  }

  render() {

    return (
      <View style={{ paddingTop: StatusBar.currentHeight }}>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={{ flex: 3, marginLeft: 20 }}>
            <TextInput value={this.state.searchinput} onChangeText={(text) => { this.setState({ searchinput: text }) }} placeholder="Search Here" placeholderTextColor="#0075a7" style={{ paddingHorizontal: 10, paddingVertical: 5, width: Dimensions.get('screen').width * 0.7, borderColor: '#0075a7', borderRadius: 8, borderWidth: 1 }} />
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}>
            <TouchableOpacity onPress={this.AddItem}>
              <Image source={require('./assets/plus.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>

          </View>
          <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20 }}>
            <TouchableOpacity onPress={this.Search}>
              <Image source={require('./assets/search.png')} style={{ width: 30, height: 30 }} />
            </TouchableOpacity>

          </View>
       
        </View>
        <FlatList data={this.state.data} renderItem={({ item }) => (

          <View style={{ paddingTop: 10, marginHorizontal: 20, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: '#0075a7', fontSize: 20, paddingVertical: 15, borderWidth: 1, borderColor: 'black', borderRadius: 8, paddingHorizontal: 70 }}>{item.name}</Text>
          </View>



        )} />
      </View>

    );
  }
}

