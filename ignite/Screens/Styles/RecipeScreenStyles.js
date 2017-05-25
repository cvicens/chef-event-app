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
  activityIndicatorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0,
      backgroundColor: Colors.backgroundTranslucent
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   },
   recipeSectionHeader: {
      flex: 1,
      //flexDirection: 'row',
      borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
      borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 2
   },
   recipeSectionTitle: {
      fontSize: 25,
      paddingTop: 5,
      color: Colors.sectionTitle,
   },
   recipeTitleText: {
      fontSize: 30,
      paddingTop: 10,
      color: Colors.text
    },
   recipeSubtitleText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 14,
      color: Colors.text
   },
   recipeHeaderContainer: {
      flexDirection: 'row',
      flex: 1
   },
   recipeDistinctionText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
    fontSize: 14,
      color: Colors.text
   },
   recipeHeader: {
      flex: 1,
      //paddingTop: Metrics.baseMargin,
      paddingTop: 40,
      paddingBottom: 20,
      backgroundColor: Colors.background,
      alignItems: 'center',
  },
  recipeSection: {
      //borderRadius: 10,
      backgroundColor: Colors.backgroundLight,
      //margin: Metrics.section,
      //padding: Metrics.baseMargin
      marginTop: 10
  },
  recipeSectionColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
  },
  recipeText: {
      ...Fonts.normal,
      color: Colors.sectionHeaderText,
      textAlign: 'justify'
  },
  recipePhoto: {
      flex: 1,
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'stretch',
   },
   recipePhotoColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   recipeDistinctionColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: Colors.frost,
   },
   recipeDistinction: {
      resizeMode: 'contain',
      margin: 5,
   },
   backdropContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000000',
    //width: 320
  },
   backdrop: {
    flex: 1,
    paddingTop: 36,
    //width: 320,
    height: 120
  },
  backdropView: {
    flex: 1,
    //height: 120,
    //width: 320,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  headline: {
    fontSize: 36,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  },
  recipeDirectionColumnA: {
    flex: 1, 
    justifyContent: 'center', alignItems: 'center', 
    backgroundColor: Colors.backgroundLigth, 
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  },
  recipeDirectionColumnB: {
    flex: 4, 
    backgroundColor: Colors.backgroundLigth,
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  },
  recipeDirectionsText: {
      ...Fonts.normal,
      color: Colors.ro,
      textAlign: 'justify'
  },
  recipeIngredientsRow: {
    flex: 1, flexDirection: 'row'
  },
  recipeIngredientsColumn: {
    flex: 1, 
    backgroundColor: Colors.backgroundLigth,
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  }
})
