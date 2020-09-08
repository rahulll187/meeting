import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';

export default EStyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.lightGreen
  },
  drawerBtn: {
    height: '50rem',
    width: '50rem',
    alignItems: 'center',
    justifyContent: 'center'
  },
  drawerBtnImg: {
    height: '18rem',
    width: '18rem'
  }
})