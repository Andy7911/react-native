 import React, { Component } from 'react';
 import {Text,View} from 'react-native';
 import {style} from './style';

 
  const Header=({subText})=> (
     <View style={style.header}>
       
  <Text>{subText}</Text>
        
     </View>
 );

 
 export default Header
 