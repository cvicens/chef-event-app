import { Platform, StyleSheet } from 'react-native'
import { Metrics, Colors, Fonts, ApplicationStyles } from '../DevTheme/'

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  container: {
      flex: 1,
      //flexDirection: 'column',
      //paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.backgroundLight
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: Colors.background,
    //height: APPBAR_HEIGHT,
    paddingVertical: 10,
    alignItems: 'center'
  },
  appBarText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.headerText
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
   recipesSectionHeader: {
      flex: 1,
      //flexDirection: 'row',
      borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
      borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 2
   },
   recipesSectionTitle: {
      fontSize: 25,
      paddingTop: 5,
      color: Colors.sectionTitle,
   },
   recipesTitleText: {
      fontSize: 30,
      paddingTop: 10,
      color: Colors.text
    },
   recipesSubtitleText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 14,
      color: Colors.text
   },
   recipesHeaderContainer: {
      flexDirection: 'row',
   },
   recipesDistinctionText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
    fontSize: 14,
      color: Colors.text
   },
   recipesHeader: {
      flex: 1,
      //paddingTop: Metrics.baseMargin,
      paddingTop: 40,
      paddingBottom: 20,
      backgroundColor: Colors.background,
      alignItems: 'center',
  },
  recipesSection: {
      //borderRadius: 10,
      backgroundColor: Colors.backgroundLight,
      //margin: Metrics.section,
      //padding: Metrics.baseMargin
      marginTop: 10
  },
  recipesSectionColumn: {
      padding: 10,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  recipeItemContainer: {
      flex: 1,
      flexDirection: 'row',
      //alignItems: 'center',
      padding: 10,
      //paddingBottom: 5,

  },
  recipeItemTitle: {
    height: 42,
    width: Metrics.screenWidth - 40,
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: Metrics.baseMargin,
    marginTop: 55,
    color: Colors.headerText,
    backgroundColor: Colors.transparent,
  },
  recipeItemSubtitle: {
    height: 22,
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 15,
    fontWeight: 'bold',
    //marginHorizontal: Metrics.baseMargin,
    //marginVertical: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin*3,
    color: Colors.headerText,
    backgroundColor: Colors.transparent,
  },
  recipeItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    //paddingBottom: 5,
  },
  recipeItemNote: {
    height: 15,
    textAlign: 'right',
    fontFamily: Fonts.base,
    fontSize: 10,
    fontWeight: 'normal',
    //marginHorizontal: Metrics.baseMargin,
    //lineHeight: 30,
    paddingBottom: 5,
    //marginVertical: Metrics.doubleBaseMargin,
    color: Colors.noteText,
    backgroundColor: Colors.transparent,
  },
  recipeItemAddress: {
    height: 15,
    textAlign: 'left',
    fontFamily: Fonts.base,
    fontSize: 10,
    fontWeight: 'normal',
    //marginHorizontal: Metrics.baseMargin,
    //lineHeight: 30,
    paddingBottom: 5,
    //marginVertical: Metrics.doubleBaseMargin,
    color: Colors.noteText,
    backgroundColor: Colors.transparent,
  },
  recipesText: {
      ...Fonts.normal,
      color: Colors.sectionHeaderText,
      textAlign: 'justify'
  },
  recipesPhoto: {
      flex: 1,
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'stretch',
   },
   recipesPhotoColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   recipesDistinctionColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: Colors.frost,
   },
   recipesDistinction: {
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
  recipesDirectionColumnA: {
    flex: 1, 
    justifyContent: 'center', alignItems: 'center', 
    backgroundColor: Colors.backgroundLigth, 
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  },
  recipesDirectionColumnB: {
    flex: 4, 
    backgroundColor: Colors.backgroundLigth,
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  },
  recipesDirectionsText: {
      ...Fonts.normal,
      color: Colors.ro,
      textAlign: 'justify'
  },
  recipesIngredientsRow: {
    flex: 1, flexDirection: 'row'
  },
  recipesIngredientsColumn: {
    flex: 1, 
    backgroundColor: Colors.backgroundLigth,
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  }
})
