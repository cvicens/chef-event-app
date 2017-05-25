import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../../../App/Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    //marginBottom: 36,
    //paddingTop: Metrics.section,
    backgroundColor: Colors.backgroundLight
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    marginTop: Metrics.doubleBaseMargin
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1
  },
  centered: {
    alignItems: 'center',
    backgroundColor: Colors.transparent
  },
  baseLeftButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    //borderBottomWidth: 1
  },
  baseRightButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    //borderRightWidth: 1,
    //borderBottomWidth: 1
  },
  baseDownLeftButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  baseDownRightButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    //borderRightWidth: 1,
    borderBottomWidth: 1
  },
  componentButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    //borderBottomWidth: 1
  },
  apiButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderBottomWidth: 1
  },
  usageButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  deviceButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderTopWidth: 1
  },
  sectionText: {
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 14,
    marginHorizontal: Metrics.baseMargin,
    lineHeight: 30,
    marginVertical: Metrics.doubleBaseMargin,
    color: Colors.headerText,
    backgroundColor: Colors.transparent,
  },
  banner: {
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: Colors.base,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36
  },
  bannerLabel: {
    ...Fonts.style.h5,
    fontSize: 12,
    color: Colors.snow
  },
  messageBox:{
        backgroundColor:'#ef553a',
        width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10
  },
  messageBoxTitleText:{
      fontWeight:'bold',
      color:'#fff',
      textAlign:'center',
      fontSize:20,
      marginBottom:10
  },
  messageBoxBodyText:{
      color:'#fff',
      fontSize:16
  }
})
