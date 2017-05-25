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
      backgroundColor: Colors.backgroundLight
  },
   curriculumTitleText: {
      fontSize: 20,
      paddingTop: 10,
      color: Colors.headerText
    },
   curriculumSubtitleText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 14,
      color: Colors.headerText
   },
   curriculumHeaderContainer: {
      flexDirection: 'row',
      flex: 1
   },
   curriculumDistinctionText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 14,
      color: Colors.headerText
   },
   curriculumHeader: {
      flex: 1,
      //paddingTop: Metrics.baseMargin,
      paddingTop: 40,
      paddingBottom: 20,
      backgroundColor: Colors.transparent,
      alignItems: 'center',
  },
  curriculumSection: {
      //borderRadius: 10,
      backgroundColor: Colors.backgroundLight,
      //margin: Metrics.section,
      //padding: Metrics.baseMargin
    },
  curriculumBioTitle: {
      ...Fonts.style.h2,
      color: Colors.charcoal,
      textAlign: 'justify'
  },
  curriculumBioText: {
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
