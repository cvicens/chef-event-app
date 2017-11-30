import React, { PropTypes } from 'react'
import { Platform, StatusBar, StyleSheet, ScrollView, Modal, Text, Image, View, TouchableOpacity, FlatList, ListItem, Button } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'

import BackgroundImage from '../../App/Components/BackgroundImage'

// Navigation
import { StackNavigator } from 'react-navigation'

// Screens
import ListRecipesScreen from './ListRecipesScreen'

// Redux stuff
import { connect } from 'react-redux'
import ListEventsActions from '../../App/Redux/ListEventsRedux'

// StatusBar
const CustomStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

// Styles
import { Colors } from '../../App/Themes'
import styles from './Styles/ListEventsScreenStyles'

class EventListItem extends React.PureComponent {
  render () {
    return (
      <View style={styles.eventItemContainer}>
        <BackgroundImage  
        image={{uri: this.props.image, scale: 3}} 
        resizeMode='cover'>
          <Text style={styles.eventItemTitle}>{this.props.title}</Text>
          <Text style={styles.eventItemSubtitle}>{this.props.subtitle}</Text>
        </BackgroundImage>
        <View style={styles.eventItemFooter}>
        <Text style={styles.eventItemAddress}>{this.props.location}</Text>
        <Text style={styles.eventItemNote}>{this.props.note}</Text>
        </View>
      </View>
    )
  }
}

class ListEventsScreen extends React.PureComponent {
  state = {selected: {}}; 

  static propTypes = {
    test: PropTypes.string
  }
  
  componentWillMount = () => {
    console.log('✨ ListEventsScreen props', this.props);

    if (this.props && this.props.screenProps) {
      this.props.fetchEvents(this.props.screenProps.country, this.props.screenProps.city);
      if (this.props.screenProps.eventId === null || this.props.screenProps.eventId.length <= 0) {
        this.props.screenProps.toggle();
      }
    } else {
      this.props.fetchEvents({ key: 0, label: '🇪🇸 Spain', isocode: 'es', code: 'SPAIN' }, 'Madrid');
    }
  }

  openRecipe = () => {
    this.props.navigation.navigate('RecipeScreen')
  }

  _keyExtractor = (item, index) => item.id; 
  
  _onPressItem = (item) => {  // updater functions are preferred for transactional updates
    console.log('_onPressItem', item);
    this.props.selectEvent(item);
  };

  renderEvents = () => {
    console.log('ListEventsScreen->renderEvents', this.props);
    if (this.props.result && this.props.result.constructor === Array) {
      return (
        <FlatList 
          data={this.props.result}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            console.log('item', item);
            console.log('this._onPressItem', this._onPressItem);
            return (
              <TouchableOpacity onPress={() => this._onPressItem(item)}>
              <EventListItem 
                //image={Images.presentation} 
                image={item.image} 
                title={item.title} 
                subtitle={item.subtitle} 
                location={item.address + ', ' + item.city}
                note={item.startTime + ' - ' + item.endTime}
                //onPressItem={this._onPressItem}
                />
              </TouchableOpacity>
          )}}
        />
      )
    } 
    return (
      <Text>No ingredients!</Text>
    )  
  }

  /*

  <CustomStatusBar backgroundColor={Colors.background} barStyle="light-content" />
        <View style={styles.appBar}>
        <Text style={styles.appBarText}>{'Event list'}</Text>
        </View>

  */

  render () {
    const __onPress = this.props.screenProps.toggle;
    //const __onPress = '';
    return (
      <View style={styles.mainContainer}>

          <View style={styles.mainContainerHeader}>
            <Image 
              source={Images.pepper} 
              style={ {flex: 1, width: null, height: null, resizeMode: 'cover'} } />

          </View>

         <View style={styles.banner}>
            <Text style={styles.bannerTitle}>{'List of Events'}</Text>
            <Text style={styles.bannerSubtitle}>{'Select one of them to show the agenda'}</Text>
          </View>

        <TouchableOpacity onPress={__onPress} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>

        <ScrollView style={styles.container} ref='container'>

          {this.renderEvents()}
          
          <Modal
            visible={this.props != null && this.props.showModal && this.props.selectedEvent != null}
            //onRequestClose={this.props.toggleModal}
            >
            <ListRecipesScreen screenProps={{ selectedEvent: this.props.selectedEvent, toggle: this.props.toggleModal }} />
          </Modal>
        </ScrollView>
        
      </View>
    )
    //            
  }
}

const mapStateToProps = (state) => {
  return {
    country: state.events.country,
    city: state.events.city,
    result: state.events.result,
    selectedEvent: state.events.selectedEvent,

    showModal: state.events.showModal,
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (country, city) => dispatch(ListEventsActions.fetchEventsRequest(country, city)),
  selectEvent: (selectedEvent) => {
    console.log('selectEvent', selectedEvent);
    dispatch(ListEventsActions.selectEvent(selectedEvent));
  },
  toggleModal: () => dispatch(ListEventsActions.toggleModalEvents()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListEventsScreen)
