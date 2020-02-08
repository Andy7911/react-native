import React,{Component} from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,BackHandler} from 'react-native';
import Header from './component/header'
import { render } from 'react-dom';
import axios from 'react-native-axios';
import Client from './component/client';
import MenuModal from './component/modal';
import Footer from './component/footer'
import { Input,Button} from 'react-native-elements';

export default class App extends React.Component {
  
state={
  username:"",
  password:"",
  currentClient:{},
  load:false

}
  
  render(){
  
  confirm=> {
    const username = this.state.username;
    const password = this.state.password; 
    this.setState({load:true})
    if(username.length>4&& password.length> 6 ){
 
      axios.get('http://localhost/apibanque/user/find_One.php',{username:username,password:password })
      .then(res=> {
        const client = res.data;
        this.setState({currentClient:client})
        this.setState({load:false})

      })



    }
    

  }
  console.log(this.state.username);
    
  return (
    <View style={{ flex: 1 }} >
      <View>
     <Header subText="Login"></Header>
</View>
<View style={styles.loginbody}>
<TextInput name="username" onChangeText={text=> this.setState({username:text})}  placeholder="username"></TextInput>
<TextInput name="password" placeholder="Password" onChangeText={text=> this.setState({password:text})} ></TextInput>
<Button  title="Connection" loading={this.state.load}></Button>

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
