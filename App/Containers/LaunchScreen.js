import React from 'react'
import { ScrollView, Text, Image, View, Button, TextInput, ActivityIndicator } from 'react-native'
import LaunchButton from '../../ignite/Screens/LaunchButton.js'

import { Modal, StyleSheet, Fonts, Metrics } from 'react-native'
import DebugConfig from '../Config/DebugConfig'
import RoundedButton from '../Components/RoundedButton'
import BackgroundImage from '../Components/BackgroundImage'
import PresentationScreen from '../../ignite/Screens/PresentationScreen'
import ListEventsScreen from '../../ignite/Screens/ListEventsScreen'

import ModalPicker from 'react-native-modal-picker'

import { Images } from '../Themes'

// Redux stuff
import { connect } from 'react-redux'
import InitActions from '../Redux/InitRedux'

// Styles
import styles from './Styles/LaunchScreenStyles'

// App state
import { AppState } from 'react-native'

class LaunchScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            textInputValue: '',
            appState: AppState.currentState
        }

        let index = 0;
        this.countries = [
            { key: index++, label: '🇪🇸 Spain', isocode: 'es', code: 'SPAIN' },
            { key: index++, label: '🇫🇷 France', isocode: 'fr', code: 'FRANCE' },
            { key: index++, label: '🇮🇪 Ireland', isocode: 'ie', code: 'IRELAND' },
        ];

        this.citiesByCountry = {
          es: [
            { key: index++, label: 'Madrid' },
            { key: index++, label: 'Barcelona' }
          ],
          fr: [
            { key: index++, label: 'Paris' },
          ],
          ie: [
            { key: index++, label: 'Dublin' },
          ]
        };
    }

  _handleAppStateChange = (nextAppState) => {
    console.log('😲 😲 😲 nextAppState', nextAppState);

    //if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
    //  console.log('App has come to the foreground!');

      // If the app is activated... but there's no city selected... we have to stay in this screen...
      // this means... updating showPresentation to false, so that the modal is not shown
      console.log ('eventId', this.props.eventId, 'country', this.props.country, 'city', this.props.city);
      if (nextAppState === 'active' && this.props.city === null) {
        this.props.updateShowPresentation(false);
      }
   // }

    //this.setState({appState: nextAppState});
  }

  componentWillMount = () => {
    //this.props.init();
    console.log('✨ LaunchScreen props', this.props);
  }

  componentDidMount = () => {
    //this.props.init();
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  componentWillReceiveProps(nextProps) {
      //console.log('#####> props', this.props, 'nextProps', nextProps);
      // If we have new country and city
      if (nextProps.country && nextProps.city) {
        // And we have old country and city
        if (this.props.country && this.props.city) {
          // Then the have to be different (at least one of them)
          if (this.props.country.code !== nextProps.country.code || this.props.city !== nextProps.city) {
            //console.log ('\\\\\\\\\\\\> Launch findEventRequest()', nextProps.country.code, nextProps.city, this.props.country, this.props.city);
            this.props.findEventRequest(nextProps.country, nextProps.city);
          }
        } else {
          // There are no old values (or just one of them)
          //console.log ('\\\\\\\\\\\\> Launch findEventRequest()', nextProps.country.code, nextProps.city, this.props.country, this.props.city);
          this.props.findEventRequest(nextProps.country, nextProps.city);
        }
      }
  }

  togglePresentation = () => {
    this.props.togglePresentation();
  }

  getCitiesByCountry = (country) => {
    if (country) {
      return this.citiesByCountry[country.isocode];
    }

    return [];
  }

  render () {
    console.log('🎥 LaunchScreen render?', this.props, JSON.stringify(new Date()), '🎬');
  
    if (!this.props.ready) {
      return (
        <View style = {[styles.activityIndicatorContainer]}>
         <ActivityIndicator animating = {!this.props.ready}
           style = {styles.activityIndicator} size = "large"
         />
      </View>
        )
    }


    let index = 0;
    const countries = [
        { key: index++, label: '🇪🇸 Spain', isocode: 'es', code: 'SPAIN' },
        { key: index++, label: '🇫🇷 France', isocode: 'fr', code: 'FRANCE' },
        { key: index++, label: '🇮🇪 Ireland', isocode: 'fr', code: 'IRELAND' },
    ];

    const citiesByCountry = {
      es: [
        { key: index++, label: 'Madrid' },
        { key: index++, label: 'Barcelona' }
      ],
      fr: [
        { key: index++, label: 'Paris' },
      ],
      ie: [
        { key: index++, label: 'Dublin' },
      ]
    };

    return (
      <View style={styles.mainContainer}>
        <BackgroundImage image={Images.background}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >
            <Image source={Images.ready} />
            <Text style={styles.sectionText}>
              {"Welcome to this 'cooking' experience, here, besides real cooking you'll learn how to 'cook' your best App ;-) "}
            </Text>

            <View style={styles.modalPickerSection} >
            <ModalPicker
              data={this.countries}
              initValue="Select country!"
              onChange={(option) => this.props.updateCountry(option)}>
              <TextInput
                  style={styles.modalPickerText}
                  editable={false}
                  placeholder="Click to select country!"
                  placeholderTextColor="white"
                  value={this.props.country === null ? '' : this.props.country.label} />
            </ModalPicker>

            <ModalPicker
              data={this.getCitiesByCountry(this.props.country)}
              initValue="Select city!"
              onChange={(option) => this.props.updateCity(option.label)}>
              <TextInput
                  style={styles.modalPickerText}
                  editable={false}
                  placeholder="Click to select city!"
                  placeholderTextColor="white"
                  value={this.props.city} />
            </ModalPicker>
            </View>

          </View>

          <RoundedButton disabled={this.props.eventId === null} onPress={this.togglePresentation}>
          Let's cook!
          </RoundedButton>

          <Modal
            visible={this.props.ready && this.props.showPresentation && (this.props.eventId !== null && this.props.eventId.length > 0)}
            onRequestClose={this.togglePresentation}>
            <ListEventsScreen screenProps={{ country: this.props.country, city: this.props.city, eventId: this.props.eventId, toggle: this.togglePresentation }} />
          </Modal>
        </ScrollView>
        </BackgroundImage>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('🔥 state', state);
  return {
    ready: state.init.ready,
    fetching: state.init.fetching,
    country: state.init.country,
    city: state.init.city,
    eventId: state.init.eventId,
    showPresentation: state.init.showPresentation
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  init: () => dispatch(InitActions.initRequest()),
  togglePresentation: () => dispatch(InitActions.togglePresentation()),
  updateShowPresentation: (showPresentation) => dispatch(InitActions.updateShowPresentation(showPresentation)),
  updateCountry: (country) => dispatch(InitActions.updateCountry(country)),
  updateCity: (city) => dispatch(InitActions.updateCity(city)),
  findEventRequest: (country, city) => dispatch(InitActions.findEventRequest(country, city)),
  updateEventId: (eventId) => dispatch(InitActions.updateEventId(eventId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
