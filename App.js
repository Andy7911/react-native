import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import Header from './component/header'
import { render } from 'react-dom';
import axios from 'react-native-axios';
import Client from './component/client';
import MenuModal from './component/modal';

export default class App extends React.Component {
  state={
client:[],
currentUser:{}
  }
  componentDidMount(){
    console.log("heo")
   axios.get('http://192.168.2.29/apibanque/client/read.php').then(res=>{
      const client = res.data.client;
       this.setState({client:client});
   }) 
     
  }
   togglerser=(user)=>{
   let currentuser = user


   }
  
  render(){
  console.log(this.state.client)
    
  return (
    <View style={{ flex: 1 }} >
      <Header></Header>
      <View style={{ flex: 1 }}>
      <ScrollView>
      <Client listclient={this.state.client}></Client>
      </ScrollView>
      <MenuModal onPressCallBack={this.togglerser}></MenuModal>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
