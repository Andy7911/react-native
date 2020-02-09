import {createStackNavigation} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import AllClient from '../component/allClient'
import App from '../App.js'


const screens ={
AdminAcess:{
 screen:AllClient

}
Login:{


}


}

const stack = createStackNavigation(screens);
export default createAppContainer(stack);



