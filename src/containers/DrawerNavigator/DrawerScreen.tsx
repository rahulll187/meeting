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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        headerStyle: { backgroundColor: Colors.lightGreen },
        headerTitleStyle: { color: Colors.grey }
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
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={16} color={tintColor} />
        ),
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
          <DrawerItems {...props} />
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
