import React, { Component } from 'react'
import View from 'react-native'
import { Input,Text} from 'react-native-elements'
import Header  from  '../header/'

 class Login extends Component {
    render() {
        return (
            <view>
                <View>
                <Header subtext="Login"></Header>   
                </View>
                <View>
                <Input placeholder="username"></Input>
                
                </View>
            </view>
        )
    }
}

export default Login;