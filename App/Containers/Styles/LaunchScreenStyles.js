import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: Colors.transparent
  },
  container: {
    paddingBottom: Metrics.baseMargin
  },
  section: {
    margin: Metrics.section,
    padding: Metrics.baseMargin,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  modalPickerText: {
    borderRadius: 5,
    padding: 0,
    marginTop: 5, 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 0, 
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)', // 40% opaque
  },
  modalPickerSection: {
    flex: 1,
    //margin: Metrics.section,
    //padding: Metrics.baseMargin,
    justifyContent: 'center',
    //alignItems: 'center'
  },
})
