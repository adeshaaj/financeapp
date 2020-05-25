import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import FriendScreen from './FriendsScreen';
import ChatScreen from './ChatScreen';

export default createStackNavigator({
 Home:{
     screen: HomeScreen,
     navigationOptions:{
        headerShown: false,
         title: 'Traveller'
     }
 },
 Friend:{
    screen: FriendScreen,
    navigationOptions:{
        headerShown: false,
        title: 'Friends SCREEN'
    }
},
 Chat:{
     screen: ChatScreen,
     navigationOptions:{
       
         title:'Chat SCREEN'
     }
 }
})
