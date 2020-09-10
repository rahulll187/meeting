import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import styles from './Stylels/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import AddEventsScreen from '../AddEvents/AddEventsScreen';
import FeedbacksScreen from '../Feedbacks/FeedbacksScreen';
import IndividualScreen from '../Individual/IndividualScreen';
import NewMemberRequestsScreen from '../NewMemberRequests/NewMemberRequestsScreen';
import OrganizationScreen from '../Organization/OrganizationScreen';
import SharedMealScreen from '../SharedMeal/SharedMeal';
import TeamScreen from '../Team/TeamScreen';
import TeamComplaintsScreen from '../TeamComplaints/TeamComplaintsScreen';
import TopDonorsScreen from '../TopDonors/TopDonorsScreen';
import UploadImagesScreen from '../UploadImages/UploadImagesScreen';



export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AddEventsStackNavigator = createStackNavigator(
  {
    Profile: AddEventsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const FeedbacksStackNavigator = createStackNavigator(
  {
    Notification: FeedbacksScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const IndividualStackNavigator = createStackNavigator(
  {
    Contect: IndividualScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const NewMemberRequestsStackNavigator = createStackNavigator(
  {
    List: NewMemberRequestsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const OrganizationStackNavigator = createStackNavigator(
  {
    Logout: OrganizationScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const SharedMealStackNavigator = createStackNavigator(
  {
    Logout: SharedMealScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const TeamStackNavigator = createStackNavigator(
  {
    Logout: TeamScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const TeamComplaintsStackNavigator = createStackNavigator(
  {
    Logout: TeamComplaintsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const TopDonorsStackNavigator = createStackNavigator(
  {
    Logout: TopDonorsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const UploadImagesStackNavigator = createStackNavigator(
  {
    Logout: UploadImagesScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
      };
    },
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    AddEvent: {
      screen: AddEventsStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },

    Feedbacks: {
      screen: FeedbacksStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    Individual: {
      screen: IndividualStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    List: {
      screen: AddEventsStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    Logout: {
      screen: AddEventsStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    NewMember: {
      screen: NewMemberRequestsStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    Organization: {
      screen: OrganizationStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    SharedMeal: {
      screen: SharedMealStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    Team: {
      screen: TeamStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    TeamComplaints: {
      screen: TeamComplaintsStackNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
      TopDonors: {
        screen: TopDonorsStackNavigator,
        navigationOptions: {
          drawerIcon: ({ tintColor }) => (
            <Icon name="user" size={16} color={tintColor} />
          ),
        },
      },
      UploadImages: {
        screen: UploadImagesStackNavigator,
        navigationOptions: {
          drawerIcon: ({ tintColor }) => (
            <Icon name="user" size={16} color={tintColor} />
          ),
        },
      },
    },
  },
  {
    contentComponent: props => (
      <ScrollView style={{ flex: 1 }}>
        {/* <ImageBackground
          source={require('../../assets/Images/menu.png')}
          style={styles.drawerProfile}> */}
        <View style={styles.drawerHeaderView}>
          <Text style={styles.drawerHeaderTxt}>Welcome, Admin</Text>
          <Image
            source={require('../../assets/Images/drawerIcon.png')}
            style={styles.drawerProfile}
          />
        </View>
        {/* </ImageBackground> */}
        <View style={{ flex: 1 }}>
          <DrawerItems {...props} />
        </View>
      </ScrollView>
    ),
  }
);

const navigator = createSwitchNavigator({
  Profile: {
    screen: DrawerNavigator,
  },
  Notification: {
    screen: IndividualScreen,
  },
});

const AppContainer = createAppContainer(navigator);
