/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button} from 'react-native';
import styles from './Styles';
import HeaderLeft from './Left';
import HeaderRight from './Right';
import HeaderTitle from './Title';

export interface Props {
  style?: any;
  children?: any;
  transparent?: boolean;
  title?: string;
  titleStyle?: any;
  hasBackBtn?: boolean;
  onBackPress?: any;
  navigation?: any;
}

export default class Header extends React.PureComponent<Props> {
  static TITLE = HeaderTitle;

  static LEFT = HeaderLeft;

  static RIGHT = HeaderRight;

  render() {
    const {
      style,
      children,
      transparent,
      hasBackBtn,
      navigation,
      title,
      titleStyle,
      onBackPress,
    } = this.props;
    return (
      <View style={[styles.header, style, transparent && styles.transparent]}>
        {hasBackBtn && (
          <HeaderLeft>
            <View style={styles.backBtn}>
              <Button
                title="Back"
                onPress={() => {
                  if (onBackPress) {
                    onBackPress();
                  } else if (navigation) {
                    navigation.goBack(null);
                  }
                }}
              />
            </View>
          </HeaderLeft>
        )}
        {title && <HeaderTitle style={titleStyle}>{title}</HeaderTitle>}
        {children}
      </View>
    );
  }
}
