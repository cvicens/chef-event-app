import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'

import NavigationDrawer from './NavigationDrawer'

import styles from './Styles/NavigationContainerStyles'

// screens identified by the router
import LaunchScreen from '../Containers/LaunchScreen'
import ListEventsScreen from '../../ignite/Screens/ListEventsScreen'
import ListRecipesScreen from '../../ignite/Screens/ListRecipesScreen'

// Redux stuff
import { connect } from 'react-redux'
import InitActions from '../Redux/InitRedux'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {

  componentWillMount = () => {
    this.props.init();
    //console.log('✨ LaunchScreen props', this.props);
  }

  render () {
    if (!this.props.ready) {
      return (
        <View style = {[styles.activityIndicatorContainer]}>
         <ActivityIndicator animating = {!this.props.ready}
           style = {styles.activityIndicator} size = "large"
         />
      </View>
        )
    }

    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={styles.navBar} titleStyle={styles.title} leftButtonIconStyle={styles.leftButton} rightButtonTextStyle={styles.rightButton}>
            <Scene initial key='launchScreen' component={LaunchScreen} title='LaunchScreen' hideNavBar />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('🔥 state', state);
  return {
    ready: state.init.ready,
    fetching: state.init.fetching,
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(InitActions.initRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationRouter)
//export default NavigationRouter
