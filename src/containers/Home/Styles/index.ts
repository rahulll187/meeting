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
    color: Colors.black,
    position: 'absolute',
    top: '10rem'
  },
  topBlackLine: {
    width: '100%',
    height: '3rem',
    backgroundColor: Colors.black,
    position: 'absolute',
    top: '50rem'
  },
  inputTxtView: {
    marginTop: '60rem'
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
    fontSize: '15rem',
    height: '12%',
    justifyContent:'center'
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
    bottom: '100rem',
    justifyContent: 'center'
  },
  btnTxt: {
    textAlign: 'center'
  },
  listMainView: {
    width: '70%',
    top: '30rem',
    height: '150rem',
    left: '15rem',
    flexDirection: 'row',
    alignItems: 'center'
  },
  listImageStyle: {
    height: '100%',
    width: '33.5%',
  },
  addImageBtn: {
    top: '50rem',
    left: '10rem'
  },
  addImageIcon: {
    height: '65rem',
    width: '65rem',
  }
})