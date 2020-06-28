/* eslint-disable prettier/prettier */
/**
 * First Screen
 */

import React from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Container, Content, Header} from '../components';
import {StyleSheet} from 'react-native';

export interface Props {
  navigation: any;
}

const styles = StyleSheet.create({
  nextScreenBtn: {
    marginTop: 200,
    alignSelf: 'center',
  },
});
class FirstScreen extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Header title={'First Screen'} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
