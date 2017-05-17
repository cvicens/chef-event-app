import React from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import LaunchButton from '../../ignite/Screens/LaunchButton.js'

import { Modal, StyleSheet, Fonts, Metrics } from 'react-native'
import DebugConfig from '../Config/DebugConfig'
import RoundedButton from '../Components/RoundedButton'
import PresentationScreen from '../../ignite/Screens/PresentationScreen'

import { Images } from '../Themes'

// Redux stuff
import { connect } from 'react-redux'
import InitActions from '../Redux/InitRedux'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
  componentWillMount = () => {
    this.props.init();
  }

  componentDidMount = () => {
    //this.props.init();
  }

  componentWillReceiveProps(nextProps) {
      console.log('#####> props', this.props, 'nextProps', nextProps);
      //this.setState({...this.state, disabled: nextProps.disabled});
  }

  onInit = () => {
    //this.props.init();
  }

  togglePresentation = () => {
    this.props.togglePresentation();
  }

  render () {
    console.log('ooooo> LaunchScreen render fetching?', this.props.fetching, JSON.stringify(new Date()), '<ooooo');
    const old = true;
    if (old) {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              {"Welcome to this 'cooking' experience, here, besides real cooking you'll learn how to 'cook' your best App ;-)"}
            </Text>
          </View>

          <LaunchButton disabled={this.props.fetching}/>
        </ScrollView>
      </View>
    )
  } else {
    return (
    <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              {"Welcome to this 'cooking' experience, here, besides real cooking you'll learn how to 'cook' your best App ;-)"}
            </Text>
          </View>

          <RoundedButton onPress={this.togglePresentation}>
          Let's cook!
          </RoundedButton>
          <Modal
            visible={this.props.showPresentation}
            onRequestClose={this.togglePresentation}>
            <PresentationScreen screenProps={{ toggle: this.togglePresentation }} />
          </Modal>
        </ScrollView>
      </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.init.fetching,
    showPresentation: state.init.showPresentation
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(InitActions.initRequest()),
  togglePresentation: () => dispatch(InitActions.togglePresentation())
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
