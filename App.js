import React,{Component} from 'react';
import { StyleSheet, Text,TextInput, View,ScrollView,BackHandler} from 'react-native';
import Header from './component/header'
import { render } from 'react-dom';
import axios from 'react-native-axios';
import Client from './component/client';
import MenuModal from './component/modal';
import Footer from './component/footer'
import { Input,Button} from 'react-native-elements';
import { BorderlessButton } from 'react-native-gesture-handler';

export default class App extends React.Component {

state={
  username:"",
  password:"",
  currentClient:{},
  load:false,
  errMessage:''

}
hellp=()=>{ console.log("press")}

confirm=()=> {
  
  const user_name = this.state.username;
  const _password = this.state.password; 
  
this.setState({load:true})

    axios.get('http://192.168.2.29/apibanque/user/find_One.php',{params:{username:user_name,password:_password }})
    .then(res=> {
      
      const client = res.data;
      this.setState({currentClient:client})
      this.setState({load:false})

    }).catch(err=>{
        this.setState({errMessage:err})
        this.setState({load:false})
    })


 
  

}
  render(){
 
 
  console.log(this.state.currentClient);
    
  return (
    <View style={{ flex: 1 }} >
      <View>
     <Header subText="Login"></Header>
</View>
<View style={styles.loginbody}>
<TextInput 
style={styles.styleInput} name="username" 
onChangeText={text=> this.setState({username:text})}  
placeholder="username"
/>
<TextInput style={styles.styleInput} 
selectionColor="blue" 
name="password" 
placeholder="Password" 
onChangeText={text=> this.setState({password:text})}  />
<Button  containerStyle={{width:360, height:5,margin:25}} onPress={()=>this.confirm()} title="Connection" loading={this.state.load}></Button>

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
  
    


  },
  styleInput:{
    height:60,
    margin:45,
    paddingLeft:6,
    fontSize:30,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth:2,
    borderBottomWidth:2,
    borderRadius:5
    


  },
  stylebut:{
margin:25    
  }
});
