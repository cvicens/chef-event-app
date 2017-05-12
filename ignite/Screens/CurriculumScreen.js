// React Native
import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { Metrics, Images } from './DevTheme'
import FullButton from '../../App/Components/FullButton'
import RoundedButton from '../../App/Components/RoundedButton'

// Redux stuff
import { connect } from 'react-redux'
import CurriculumActions from '../../App/Redux/CurriculumRedux'

// Styles
import styles from './Styles/CurriculumScreenStyles'

const _styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
});

class CurriculumScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }
  }

  componentWillMount = () => {
    this.props.fetchCurriculum();
  }

  fetchCurriculum = () => {
    //this.props.fetchCurriculum();
  }

  render () {
    if (this.props.fetching) {
      return (
        <View style = {[_styles.container, {backgroundColor: '#3e253e'}]}>
         <ActivityIndicator animating = {this.props.fetching}
           style = {_styles.activityIndicator} size = "large"
         />
      </View>
        )
    }

    return (
      <View style={[styles.mainContainer, {backgroundColor: '#3e253e'}]}>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        <ScrollView style={styles.container} ref='container'>
          <View style={{alignItems: 'center', paddingTop: 60}}>
            <Image source={Images.api} style={styles.logo} />
            <Text style={styles.titleText}>API</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
              Testing API with Postman or APIary.io verifies the server works.
              The API Test screen is the next step; a simple in-app way to verify and debug your in-app API functions.
            </Text>
          </View>
          <RoundedButton onPress={this.fetchCurriculum}>Let's cook!</RoundedButton>
          <Text style={styles.sectionText}>{this.props.fetching}</Text>
          <Text style={styles.sectionText}>{this.props.result.msg}</Text>
          <Text style={styles.sectionText}>{this.props.errorReason}</Text>
          <Text style={styles.sectionText}>{this.props.errorDescription}</Text>
          <Text style={styles.sectionText}>{this.props.errorRecoverySuggestion}</Text>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  var errorMessage = state.curriculum.errorMessage || {};
  var errorDescription = null;
  if (errorMessage && errorMessage.userInfo) {
    errorReason = errorMessage.userInfo.NSLocalizedFailureReason;
    errorDescription = errorMessage.userInfo.NSLocalizedDescription;
    errorRecoverySuggestion = errorMessage.userInfo.NSLocalizedRecoverySuggestion;
  } else {
    errorReason = null;
    errorDescription = null;
    errorRecoverySuggestion = null;
  }
  return {
    fetching: state.curriculum.fetching,
    result: state.curriculum.result || {},
    errorMessage: state.curriculum.errorMessage || {},
    errorReason: errorReason,
    errorDescription: errorDescription,
    errorRecoverySuggestion: errorRecoverySuggestion
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  fetchCurriculum: () => dispatch(CurriculumActions.fetchRequest('1234567890'))
})

export default connect(mapStateToProps, mapDispatchToProps)(CurriculumScreen)
