/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/**
 *  Navigation Routes defind
 */
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../containers/Home/HomeScreen';
import SplashScreen from '../containers/SplashScreen';
import DrawerScreen from '../containers/DrawerNavigator/DrawerScreen';

const AppNavigation = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Home: {
      screen: HomeScreen
    },
    Drawer: {
      screen: DrawerScreen
    }
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default AppNavigation;
