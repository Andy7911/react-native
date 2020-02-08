import React,{Component} from 'react';
import { StyleSheet, Text, View,ScrollView,BackHandler} from 'react-native';
import Header from './component/header'
import { render } from 'react-dom';
import axios from 'react-native-axios';
import Client from './component/client';
import MenuModal from './component/modal';
import Footer from './component/footer'
import { Input,Button} from 'react-native-elements';

export default class App extends React.Component {
 
  
  render(){
  
    
  return (
    <View style={{ flex: 1 }} >
      <View>
     <Header subText="Login"></Header>
</View>
<View style={styles.loginbody}>
<Input placeholder="username"></Input>
<Input placeholder="Password" onChange ></Input>
<Button  title="Connection"></Button>

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
  loginbody:{
    flex:1,
    paddingStart:50
    


  }
});
