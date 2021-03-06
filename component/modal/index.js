import React from 'react';
import { View,Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import Modal from 'react-native-modal';
import style from './style'




 const MenuModal=({isVisible,onDisableCallBack})=>(
     <TouchableHighlight onLongPress={()=>onDisableCallBack()}>
<View>

<Modal isVisible={isVisible} onBackButtonPress={()=>onDisableCallBack()}>
    
          <View style={style.modal}>
            <Text style={{fontSize:20,textAlign:'center'}}>Que voulez vous faire ?</Text>
            <Button title="edit" onPress={()=>onDisableCallBack()}></Button>
            <Button  title="Delete" style={style.butttondelete}></Button>
          </View>
        </Modal>
        </View>
        </TouchableHighlight>





)

export default MenuModal;