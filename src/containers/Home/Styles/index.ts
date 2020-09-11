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
  },
  topTitleTxt: {
    paddingLeft: '10rem',
    fontSize: '17rem',
    //marginTop: '15rem',
    color: Colors.lightGrey
  },
  topBlackLine: {
    width: '100%',
    height: '3rem',
    backgroundColor: Colors.black,
    marginTop: '15rem'
  },
  inputTxtView: {
    marginTop: '150rem'
  },
  lableTxt: {
    paddingLeft: '10rem',
    fontSize: '13rem',
    color: Colors.grey,
    marginTop: '30rem'
  },
  inputBox: {
    alignSelf: 'center',
    width: '95%',
    borderBottomColor: Colors.black,
    borderBottomWidth: '1.5rem',
    fontSize: '18rem'
  },
  uploadImgBtn: {
    height: '55rem',
    width: '95%',
    borderRadius: '12rem',
    backgroundColor: Colors.orange,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: '50rem',
    borderWidth: 6,
    borderColor: Colors.white,
    elevation: 6,
    bottom: '10rem',
    justifyContent: 'center'
  },
  btnTxt: {
    textAlign: 'center'
  }
})