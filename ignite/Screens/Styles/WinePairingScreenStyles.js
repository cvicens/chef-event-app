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
  mainContainerHeader: {
    height: 150,
    //flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    //padding: 10,
    //marginHorizontal: 10,
    //paddingBottom: 10,
    borderBottomColor: Colors.borderLightGrey, 
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  container: {
    flex: 1,
    //flexDirection: 'column',
    //paddingTop: Metrics.baseMargin,
    backgroundColor: Colors.backgroundLighter
  },
  banner: {
    height: 90,
    backgroundColor: "rgba(255, 255, 255, .98)",
    borderWidth: 1,
    borderColor: Colors.borderLightGrey,
    marginHorizontal: 30,
    marginTop: -45,
    alignItems: 'center'
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
    marginTop: 15,
  },
  bannerSubtitle: {
    fontSize: 15,
    fontWeight: 'normal',
    color: Colors.charcoal,
    marginTop: 5,
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
   winePairingsSectionHeader: {
      flex: 1,
      //flexDirection: 'row',
      borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
      borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 2
   },
   winePairingsSectionTitle: {
      fontSize: 25,
      paddingTop: 5,
      color: Colors.sectionTitle,
   },
   winePairingsTitleText: {
      fontSize: 30,
      paddingTop: 10,
      color: Colors.text
    },
   winePairingsSubtitleText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 14,
      color: Colors.text
   },
   winePairingsHeaderContainer: {
      flexDirection: 'row',
   },
   winePairingsDistinctionText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
    fontSize: 14,
      color: Colors.text
   },
   winePairingsHeader: {
      flex: 1,
      //paddingTop: Metrics.baseMargin,
      paddingTop: 40,
      paddingBottom: 20,
      backgroundColor: Colors.background,
      alignItems: 'center',
  },
  winePairingsSection: {
      //borderRadius: 10,
      backgroundColor: Colors.backgroundLight,
      //margin: Metrics.section,
      //padding: Metrics.baseMargin
      marginTop: 10
  },
  winePairingsSectionColumn: {
      padding: 10,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  winePairingItemContainer: {
      height: 150,
      //flex: 1,
      flexDirection: 'row',
      //alignItems: 'center',
      //padding: 10,
      marginHorizontal: 10,
      paddingVertical: 10,
      borderBottomColor: Colors.borderLightGrey, 
      borderBottomWidth: StyleSheet.hairlineWidth

  },
  winePairingItemContainerText: {
    flex: 3,
    flexDirection: 'column',
    //alignItems: 'center',
    marginRight: 5,
    //paddingBottom: 5,
  },
  winePairingItemContainerImage: {
    flex: 1,
    flexDirection: 'column',
    //alignItems: 'center',
    //padding: 10,
    //paddingBottom: 5,
  },
  winePairingItemTitle: {
    //height: 42,
    //width: Metrics.screenWidth - 40,
    textAlign: 'left',
    fontFamily: Fonts.base,
    fontSize: 15,
    fontWeight: 'bold',
    //marginHorizontal: Metrics.baseMargin,
    //marginTop: 55,
    color: Colors.black,
    backgroundColor: Colors.transparent,
  },
  winePairingItemDescription: {
    //height: 42,
    //width: Metrics.screenWidth - 40,
    textAlign: 'left',
    fontFamily: Fonts.base,
    fontSize: 13,
    fontWeight: 'normal',
    //marginHorizontal: Metrics.baseMargin,
    marginTop: 5,
    color: Colors.charcoal,
    backgroundColor: Colors.transparent,
  },
  winePairingItemSubtitle: {
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
  winePairingItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    //paddingBottom: 5,
  },
  winePairingItemNote: {
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
  winePairingItemAddress: {
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
  winePairingsText: {
      ...Fonts.normal,
      color: Colors.sectionHeaderText,
      textAlign: 'justify'
  },
  winePairingsPhoto: {
      flex: 1,
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'stretch',
   },
   winePairingsPhotoColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   winePairingsDistinctionColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: Colors.frost,
   },
   winePairingsDistinction: {
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
  winePairingsDirectionColumnA: {
    flex: 1, 
    justifyContent: 'center', alignItems: 'center', 
    backgroundColor: Colors.backgroundLigth, 
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  },
  winePairingsDirectionColumnB: {
    flex: 4, 
    backgroundColor: Colors.backgroundLigth,
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  },
  winePairingsDirectionsText: {
      ...Fonts.normal,
      color: Colors.ro,
      textAlign: 'justify'
  },
  winePairingsIngredientsRow: {
    flex: 1, flexDirection: 'row'
  },
  winePairingsIngredientsColumn: {
    flex: 1, 
    backgroundColor: Colors.backgroundLigth,
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  }
})
