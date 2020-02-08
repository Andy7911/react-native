import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView,BackHandler } from 'react-native';
import Header from '../header'
import { render } from 'react-dom';
import axios from 'react-native-axios';
import Client from '../client';
import MenuModal from '../modal';
import Footer from '../footer'

export default class ListClient extends React.Component {
  state={
client:[],
currentUser:{},
ismenuvisible:false
  }
  componentDidMount(){
    console.log("heo")
   axios.get('http://192.168.2.29/apibanque/client/read.php').then(res=>{
      const client = res.data.client;
       this.setState({client:client});
   })
     
  }
   togglerUser=(user)=>{
   let currentUser = user
   if(this.state.ismenuvisible){
    currentuser={}

   }
    this.setState({ismenuvisible:!this.state.ismenuvisible,currentUser:currentUser})

   }
  
  render(){
  console.log(this.state.client)
    
  return (
    <View style={{ flex: 1 }} >
      <Header subText="La Banque de jasme"></Header>
      <View style={{ flex: 1 }}>
      <ScrollView>
      <Client listclient={this.state.client} onPressCallBack={this.togglerUser}></Client>
      </ScrollView>
      <MenuModal isVisible={this.state.ismenuvisible} onDisableCallBack={this.togglerUser}></MenuModal>
      </View>
      <View>
        <Footer></Footer>
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