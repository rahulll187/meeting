/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
/**
 *  Navigation Routes defind
 */
import { createStackNavigator } from 'react-navigation-stack';

import FirstScreen from '../containers/FirstScreen';
import SplashScreen from '../containers/SplashScreen';

const AppNavigation = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    First: {
      screen: FirstScreen
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
