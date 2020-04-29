import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './../Containers/Auth/Login';

const Auth = createSwitchNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
);

const MainNavigation = createSwitchNavigator(
  {
    Auth: {
      screen: Auth,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Auth',
    header: null,
  },
);

export default createAppContainer(MainNavigation);
