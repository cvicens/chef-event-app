import React from 'react'
import { ScrollView, Text, Image, View, Button, TextInput } from 'react-native'
import LaunchButton from '../../ignite/Screens/LaunchButton.js'

import { Modal, StyleSheet, Fonts, Metrics } from 'react-native'
import DebugConfig from '../Config/DebugConfig'
import RoundedButton from '../Components/RoundedButton'
import PresentationScreen from '../../ignite/Screens/PresentationScreen'

import ModalPicker from 'react-native-modal-picker'

import { Images } from '../Themes'

// Redux stuff
import { connect } from 'react-redux'
import InitActions from '../Redux/InitRedux'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends React.Component {
    constructor() {
        super();

        this.state = {
            textInputValue: ''
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

  componentWillMount = () => {
    this.props.init();
  }

  componentDidMount = () => {
    //this.props.init();
  }

  componentWillReceiveProps(nextProps) {
      //console.log('#####> props', this.props, 'nextProps', nextProps);
      // If we have new country and city
      if (nextProps.country && nextProps.city) {
        // And we have old country and city
        if (this.props.country && this.props.city) {
          // Then the have to be different (at least one of them)
          if (this.props.country.code !== nextProps.country.code || this.props.city !== nextProps.city) {
            console.log ('\\\\\\\\\\\\> Launch findEventRequest()', nextProps.country.code, nextProps.city, this.props.country, this.props.city);
            this.props.findEventRequest(nextProps.country, nextProps.city);
          }
        } else {
          // There are no old values (or just one of them)
          console.log ('\\\\\\\\\\\\> Launch findEventRequest()', nextProps.country.code, nextProps.city, this.props.country, this.props.city);
          this.props.findEventRequest(nextProps.country, nextProps.city);
        }
      }
  }

  onInit = () => {
    //this.props.init();
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
    console.log('ooooo> LaunchScreen render fetching?', this.props.fetching, JSON.stringify(new Date()), '<ooooo');
  
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
            visible={this.props.showPresentation}
            onRequestClose={this.togglePresentation}>
            <PresentationScreen screenProps={{ toggle: this.togglePresentation }} />
          </Modal>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
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
  updateCountry: (country) => dispatch(InitActions.updateCountry(country)),
  updateCity: (city) => dispatch(InitActions.updateCity(city)),
  findEventRequest: (country, city) => dispatch(InitActions.findEventRequest(country, city)),
  updateEventId: (eventId) => dispatch(InitActions.updateEventId(eventId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
