import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  ScrollView,
  View,
  Text,
  Image,
  StatusBar
} from 'react-native';
import styles from './Stylels/index';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import FeedbacksScreen from '../Feedbacks/FeedbacksScreen';
import IndividualScreen from '../Individual/IndividualScreen';
import NewMemberRequestsScreen from '../NewMemberRequests/NewMemberRequestsScreen';
import OrganizationScreen from '../Organization/OrganizationScreen';
import SharedMealScreen from '../SharedMeal/SharedMeal';
import TeamScreen from '../Team/TeamScreen';
import TeamComplaintsScreen from '../TeamComplaints/TeamComplaintsScreen';
import TopDonorsScreen from '../TopDonors/TopDonorsScreen';
import UploadImagesScreen from '../UploadImages/UploadImagesScreen';
import HomeScreen from '../Home/HomeScreen';
import { Colors } from '../../theme';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AddEventsStackNavigator = createStackNavigator(
  {
    Events: HomeScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const FeedbacksStackNavigator = createStackNavigator(
  {
    Feedbacks: FeedbacksScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const IndividualStackNavigator = createStackNavigator(
  {
    Individual: IndividualScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const NewMemberRequestsStackNavigator = createStackNavigator(
  {
    MemberRequests: NewMemberRequestsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const OrganizationStackNavigator = createStackNavigator(
  {
    Organization: OrganizationScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const SharedMealStackNavigator = createStackNavigator(
  {
    SharedMeal: SharedMealScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const TeamStackNavigator = createStackNavigator(
  {
    Team: TeamScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const TeamComplaintsStackNavigator = createStackNavigator(
  {
    Complaints: TeamComplaintsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const TopDonorsStackNavigator = createStackNavigator(
  {
    Donors: TopDonorsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const UploadImagesStackNavigator = createStackNavigator(
  {
    UploadImages: UploadImagesScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10, color: Colors.white }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.white }
      };
    },
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Individual: {
      screen: IndividualStackNavigator,
      navigationOptions: {
        drawerLabel: 'Individual',
        labelStyle: {
          color: Colors.white
        },
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
        contentOptions: {
          labelStyle: {
            color: Colors.white
          },
        }
      },

    },
    Organization: {
      screen: OrganizationStackNavigator,
      navigationOptions: {
        drawerLabel: 'Organization',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    Team: {
      screen: TeamStackNavigator,
      navigationOptions: {
        drawerLabel: 'Team',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },

    UploadImages: {
      screen: UploadImagesStackNavigator,
      navigationOptions: {
        drawerLabel: 'Upload Images',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    AddEvent: {
      screen: AddEventsStackNavigator,
      navigationOptions: {
        drawerLabel: 'Add Events',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    SharedMeal: {
      screen: SharedMealStackNavigator,
      navigationOptions: {
        drawerLabel: 'Shared Meal/Paid Donations',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    Feedbacks: {
      screen: FeedbacksStackNavigator,
      navigationOptions: {
        drawerLabel: 'View Feedbacks',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    TopDonors: {
      screen: TopDonorsStackNavigator,
      navigationOptions: {
        drawerLabel: 'Top Donors',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    NewMember: {
      screen: NewMemberRequestsStackNavigator,
      navigationOptions: {
        drawerLabel: 'New Member Requests',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },
    },
    TeamComplaints: {
      screen: TeamComplaintsStackNavigator,
      navigationOptions: {
        drawerLabel: 'Team Complaints',
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
      },


    },
  },
  {
    contentComponent: props => (
      <ScrollView style={{ flex: 1 }}>
        <StatusBar translucent backgroundColor="transparent" />
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
        <View style={styles.scrollViewStyle}>
          <Text style={styles.drawerHeader}>Donation Reports</Text>
          <DrawerItems {...props} labelStyle={{ color: Colors.white }} />
          <View style={styles.line} />
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
