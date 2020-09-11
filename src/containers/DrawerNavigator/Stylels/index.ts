import EStyleSheet from 'react-native-extended-stylesheet';
import { Colors } from '../../../theme';

export default EStyleSheet.create({
  drawerHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '20rem',
    height: '20%',
    marginTop: '20rem'
  },
  drawerHeaderTxt: {
    fontSize: '18rem',
    color: Colors.orange,
    textAlign: 'center'
  },
  drawerProfile: {
    width: '100rem',
    height: '100rem',
    borderRadius: '50rem',
    borderWidth: 3,
    borderColor: '#FFF',
    alignSelf: 'center'
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: Colors.orange,
    height: '650rem'
  },
  drawerHeader: {
    fontSize: '15rem',
    fontWeight: '100',
    padding: '20rem'
  },
  line: {
    width: '100%',
    backgroundColor: Colors.black,
    height: '1rem'
  },
  lableTxt: {
    paddingLeft: '10rem',
    fontSize: '13rem',
    color: Colors.grey,
    marginTop: '30rem'
  },
})