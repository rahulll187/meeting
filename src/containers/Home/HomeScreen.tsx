/* eslint-disable prettier/prettier */
/**
 * Home Screen
 */

import React from 'react';
import { View, TextInput, StatusBar, TouchableOpacity, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import styles from './Styles/index';
import { Colors, Images } from '../../theme';

export interface Props {
  navigation: any;
}

export interface State {
  navigation: any;
}

class HomeScreen extends React.PureComponent<Props, State> {
  setState: any;
  state: { color: string; };
  props: { navigation: any; };
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={Colors.green}
        />
        <Header title={'Events'} style={styles.headerStyle} titleStyle={styles.headerTxt}>
          <TouchableOpacity style={styles.drawerBtn}>
            <Image source={Images.menuIcon} style={styles.drawerBtnImg} />
          </TouchableOpacity>
        </Header>
        <Content style={styles.container}>
          <Text style={styles.topTitleTxt}>Event Creation</Text>
          <View style={styles.topBlackLine} />
          <View style={styles.inputTxtView}>
            <Text style={styles.lableTxt}>Event Name</Text>
            <TextInput
              style={styles.inputBox}
            />
            <Text style={styles.lableTxt}>Event Venue</Text>
            <TextInput
              style={styles.inputBox}
            />
            <Text style={styles.lableTxt}>Description</Text>
            <TextInput
              style={styles.inputBox}
            />
          </View>
          <TouchableOpacity style={styles.uploadImgBtn}>
            <Text style={styles.btnTxt}>UPLOAD</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
