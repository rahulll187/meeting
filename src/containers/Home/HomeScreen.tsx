/* eslint-disable prettier/prettier */
/**
 * Home Screen
 */

import React from 'react';
import { View, Button, StatusBar, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content, Header } from '../../components';
import styles from './Styles/index';
import { Colors, Images } from '../../theme';

export interface Props {
  navigation: any;
}

class HomeScreen extends React.PureComponent<Props> {
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
        <Header title={'Home Screen'} style={styles.headerStyle} titleStyle={styles.headerTxt}>
          <TouchableOpacity style={styles.drawerBtn}>
            <Image source={Images.menuIcon} style={styles.drawerBtnImg} />
          </TouchableOpacity>
        </Header>
        <Content>
          <View style={styles.nextScreenBtn}>
            <Button
              title="Next Screen"
              onPress={() => {
                navigation.navigate('Second');
              }}
            />
          </View>
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
