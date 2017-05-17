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
        <View style = {[styles.activityIndicatorContainer]}>
         <ActivityIndicator animating = {this.props.fetching}
           style = {styles.activityIndicator} size = "large"
         />
      </View>
        )
    }

    if (this.props.errorMessage) {
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
              Error while fetching the curriculum
            </Text>
            <Text style={styles.sectionText}>{this.props.errorReason}</Text>
            <Text style={styles.sectionText}>{this.props.errorDescription}</Text>
            <Text style={styles.sectionText}>{this.props.errorRecoverySuggestion}</Text>
          </View>
          
        </ScrollView>
      </View>
      )
    }

    return (
      <View style={[styles.mainContainer]}>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 5,
          zIndex: 10
        }}>
          <Image source={Images.backButton} />
        </TouchableOpacity>
        
        <ScrollView style={styles.container} ref='container'>
          <View style={styles.curriculumHeader}>
            <View style={styles.curriculumHeaderContainer}>
            <View style={styles.curriculumDistinctionColumn}>
              <Image source={Images.michelinStar} style={styles.curriculumDistinction} />
              <Text style={styles.curriculumDistinctionText}>{this.props.distinctions.michelin} stars</Text>
            </View>
            <Image source={{uri: this.props.photo}} style={styles.curriculumPhoto} />
            <View style={styles.curriculumDistinctionColumn}>
              <Image source={Images.laListe} style={styles.curriculumDistinction} />
              <Text style={styles.curriculumDistinctionText}>{this.props.distinctions.la_liste} %</Text>
            </View>
            </View>
            <Text style={styles.curriculumTitleText}>{this.props.nickName}</Text>
            <Text style={styles.curriculumSubtitleText}>{this.props.restaurant}</Text>
          </View>
          <View style={styles.curriculumSection}>
            <Text style={[styles.curriculumText, {margin: 10}]}>
              {this.props.biography}
            </Text>
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.curriculum.fetching,
    error: state.curriculum.error,
    result: state.curriculum.result,
    firstName: state.curriculum.firstName, 
    lastName: state.curriculum.lastName, 
    nickName: state.curriculum.nickName, 
    biography: state.curriculum.biography, 
    photo: state.curriculum.photo, 
    restaurant: state.curriculum.restaurant, 
    distinctions: state.curriculum.distinctions,
    errorMessage: state.curriculum.errorMessage,
    errorReason: state.curriculum.errorReason,
    errorDescription: state.curriculum.errorDescription,
    errorRecoverySuggestion: state.curriculum.errorRecoverySuggestion
  }
}

const mapStateToPropsOld = (state) => {
  var errorMessage = state.curriculum.errorMessage;
  var result = state.curriculum.result;
  var errorDescription = null;
  if (state.curriculum.error) {
    result = null;
    errorReason = state.curriculum.errorReason;
    errorDescription = state.curriculum.errorDescription;
    errorRecoverySuggestion = state.curriculum.errorRecoverySuggestion;
  } else {
    result = state.curriculum.result[0] || {};
    errorMessage = null;
    errorReason = null;
    errorDescription = null;
    errorRecoverySuggestion = null;
  }
  return {
    fetching: state.curriculum.fetching,
    error: state.curriculum.error,
    result: result,
    errorMessage: errorMessage,
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
