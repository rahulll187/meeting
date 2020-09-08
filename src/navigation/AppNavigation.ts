/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/**
 *  Navigation Routes defind
 */
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../containers/Home/HomeScreen';
import SplashScreen from '../containers/SplashScreen';

const AppNavigation = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Home: {
      screen: HomeScreen
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
