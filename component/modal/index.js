import React from 'react';
import { View,Text, Button } from 'react-native';
import Modal from 'react-native-modal';




 const MenuModal=()=>(

<View>


<Modal isVisible={false}/>
    
          <View style={{ flex: 1 }}>
              <Button title="edit"></Button>
            <Text>I am the modal content!</Text>
          </View>
       

</View>


)

export default MenuModal;