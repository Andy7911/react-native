 import React, { Component } from 'react';
 import {Text,View} from 'react-native';
 import {style} from './style';

 
  const Header=()=> (
     <View style={{flex: 1, flexDirection: 'row' }}>
        <View style={style.header}>
            <Text>Banque App</Text>
        </View>
     </View>
 );

 
 export default Header
 