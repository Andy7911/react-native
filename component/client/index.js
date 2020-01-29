import React from 'react'
import {View,Text,Button, FlatList} from 'react-native'

import {Card,List,ListItem,} from 'react-native-elements'

 class Client extends React.Component{
render(){
  const onPressCallBack =this.props.onPressCallBack;  
  // const listclient = this.props.listclient.map((Element,i)=> <ListItem title={Element.nom} rightTitle={Element.solde} ></ListItem>)
return (
  <View>
<Card title ="client">
  {
    this.props.listclient.map((user) => (
      <ListItem
        key={user.id}
        title={user.lastname}
        subtitle={"Solde: "+user.solde+" credit: "+user.credit}
        onPress={()=>onPressCallBack(user)}
        bottomDivider
        chevron
      />
    ))
  }
</Card>
</View>



)

}

 }
 





 export default Client 