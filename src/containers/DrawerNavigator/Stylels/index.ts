import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';

export default EStyleSheet.create({
  drawerHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '20rem',
    height: '20%'
  },
  drawerHeaderTxt: {
    fontSize: '18rem',
    color: Colors.red,
    textAlign: 'center'
  },
  drawerProfile: {
    width: '100rem',
    height: '100rem',
    borderRadius: '50rem',
    borderWidth: 3,
    borderColor: '#FFF',
    alignSelf: 'center',
    
  }
})