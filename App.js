import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginScreenStack from './src/screen/auth/';
import DashboardStack from './src/screen/dashboard';

const App = createSwitchNavigator({
  Login:LoginScreenStack,
  Dashboard: DashboardStack
})

export default createAppContainer(App);