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
      //flexDirection: 'column',
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
   eventsSectionHeader: {
      flex: 1,
      //flexDirection: 'row',
      borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
      borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 2
   },
   eventsSectionTitle: {
      fontSize: 25,
      paddingTop: 5,
      color: Colors.sectionTitle,
   },
   eventsTitleText: {
      fontSize: 30,
      paddingTop: 10,
      color: Colors.text
    },
   eventsSubtitleText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 14,
      color: Colors.text
   },
   eventsHeaderContainer: {
      flexDirection: 'row',
      flex: 1
   },
   eventsDistinctionText: {
      fontWeight: 'normal',
      fontStyle: 'italic',
    fontSize: 14,
      color: Colors.text
   },
   eventsHeader: {
      flex: 1,
      //paddingTop: Metrics.baseMargin,
      paddingTop: 40,
      paddingBottom: 20,
      backgroundColor: Colors.background,
      alignItems: 'center',
  },
  eventsSection: {
      //borderRadius: 10,
      backgroundColor: Colors.backgroundLight,
      //margin: Metrics.section,
      //padding: Metrics.baseMargin
      marginTop: 10
  },
  eventsSectionColumn: {
      padding: 10,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  eventItemContainer: {
      flex: 1,
      flexDirection: 'column',
      //alignItems: 'center',
      padding: 10,
      //paddingBottom: 5,

  },
  eventItemTitle: {
    height: 50,
    width: Metrics.screenWidth - 40,
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 25,
    fontWeight: 'bold',
    marginHorizontal: Metrics.baseMargin,
    marginTop: 60,
    color: Colors.headerText,
    backgroundColor: Colors.transparent,
  },
  eventItemSubtitle: {
    height: 22,
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.doubleBaseMargin,
    color: Colors.headerText,
    backgroundColor: Colors.transparent,
  },
  eventItemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    //paddingBottom: 5,
  },
  eventItemNote: {
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
  eventItemAddress: {
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
  eventsText: {
      ...Fonts.normal,
      color: Colors.sectionHeaderText,
      textAlign: 'justify'
  },
  eventsPhoto: {
      flex: 1,
      height: 150,
      resizeMode: 'contain',
      alignSelf: 'stretch',
   },
   eventsPhotoColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   eventsDistinctionColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      //backgroundColor: Colors.frost,
   },
   eventsDistinction: {
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
  eventsDirectionColumnA: {
    flex: 1, 
    justifyContent: 'center', alignItems: 'center', 
    backgroundColor: Colors.backgroundLigth, 
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  },
  eventsDirectionColumnB: {
    flex: 4, 
    backgroundColor: Colors.backgroundLigth,
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  },
  eventsDirectionsText: {
      ...Fonts.normal,
      color: Colors.ro,
      textAlign: 'justify'
  },
  eventsIngredientsRow: {
    flex: 1, flexDirection: 'row'
  },
  eventsIngredientsColumn: {
    flex: 1, 
    backgroundColor: Colors.backgroundLigth,
    borderTopColor: Colors.borderLight, borderBottomColor: Colors.borderDark,
    borderLeftWidth: 0, borderTopWidth: 0, borderRightWidth: 0, borderBottomWidth: 1
  }
})
