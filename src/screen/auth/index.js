import { createStackNavigator } from 'react-navigation-stack';
import Register from './Register';
import Login from './Login';
import Forgot from './Login';
import CreatePin from './CreatePin';
import EnterPin from './EnterPin';
export default createStackNavigator({
 Login:{
     screen: Login,
     navigationOptions:{
         title: 'LOGIN SCREEN'
     }
 },
 Register:{
     screen: Register,
     navigationOptions:{
         title:'REGISTER SCREEN'
     }
 },

})
