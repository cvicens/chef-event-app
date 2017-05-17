import { StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevTheme/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  container: {
      flex: 1,
      //paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.wenge
  },
  activityIndicatorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
      backgroundColor: Colors.background
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   },
   curriculumTitleText: {
      fontSize: 20,
      paddingTop: 10,
      color: Colors.text
    },
   curriculumSubtitleText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 14,
      color: Colors.text
   },
   curriculumHeaderContainer: {
      flexDirection: 'row',
      flex: 1
   },
   curriculumDistinctionText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
    fontSize: 14,
      color: Colors.text
   },
   curriculumHeader: {
      flex: 1,
      //paddingTop: Metrics.baseMargin,
      paddingTop: 40,
      paddingBottom: 20,
      backgroundColor: Colors.background,
      alignItems: 'center',
  },
  curriculumSection: {
      //borderRadius: 10,
      backgroundColor: Colors.snow,
      //margin: Metrics.section,
      //padding: Metrics.baseMargin
    },
  curriculumText: {
      ...Fonts.normal,
      color: Colors.charcoal,
      textAlign: 'justify'
  },
  curriculumPhoto: {
      flex: 1,
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'stretch',
   },
   curriculumPhotoColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   curriculumDistinctionColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: Colors.frost,
   },
   curriculumDistinction: {
      resizeMode: 'contain',
      margin: 5,
   },
   sectionKK: {
      color: Colors.charcoal,
      backgroundColor: Colors.charcoal,
      margin: 0,
      padding: 0
    },
})
