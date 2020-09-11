/* eslint-disable prettier/prettier */
/**
 * Home Screen
 */

import React from 'react';
import { View, TextInput, StatusBar, TouchableOpacity, FlatList, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content } from '../../components';
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
      <View>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor={Colors.green}
        />
        <Content>
          <Text style={styles.topTitleTxt}>Event Creation</Text>
          <View style={styles.topBlackLine} />
          <View style={styles.listMainView}>
            <Image
              style={styles.listImageStyle}
              source={Images.img1}
            />
            <Image
              style={styles.listImageStyle}
              source={Images.img2}
            />
            <Image
              style={styles.listImageStyle}
              source={Images.img3}
            />
            <TouchableOpacity style={[styles.addImageIcon, styles.addImageBtn]} >
              <Image
                style={styles.addImageIcon}
                source={Images.add}
              />
            </TouchableOpacity>
          </View>
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
      </View>
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
