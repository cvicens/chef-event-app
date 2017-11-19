import React, { PropTypes } from 'react'
import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, FlatList, ListItem, Button } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'

import BackgroundImage from '../../App/Components/BackgroundImage'

// Navigation
import { StackNavigator } from 'react-navigation'

import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardAction
} from '../../App/Components/card-view'

// Screens
import APITestingScreen from './APITestingScreen'
import ComponentExamplesScreen from './ComponentExamplesScreen'
import DeviceInfoScreen from './DeviceInfoScreen'
import PluginExamplesScreen from './PluginExamplesScreen'
import ThemeScreen from './ThemeScreen'
import FaqScreen from './FaqScreen'

import CurriculumScreen from './CurriculumScreen'
import RecipeScreen from './RecipeScreen'

// Redux stuff
import { connect } from 'react-redux'
import EventsActions from '../../App/Redux/EventsRedux'

// Styles
import styles from './Styles/ListEventsScreenStyles'

class EventListItem extends React.PureComponent {
  _styles = StyleSheet.create({
    backgroundImage: {
        //flex: 1,
        width: 200,
        height: 150
    }
  })

  _onPress = () => {
    this.props.onPressItem(this.props.key);
  };

  renderC() {
    const __style = [ this._styles.backgroundImage,
      { resizeMode: this.props.resizeMode || 'cover' }
    ]
    return (
      <Card>
      <CardImage>
        <Image onPress={this._onPress}
          style={{flex: 1,
            width: null,
            height: null, resizeMode: 'cover'}}
          source={Images.presentation}>
          <Text style={[styles.title, {alignSelf: 'center'}]}>{this.props.title}</Text>
          <Text style={[styles.title, {alignSelf: 'center'}]}>{this.props.subtitle}</Text>
        </Image>
      </CardImage>
      </Card>
    )
  }

  render () {
    return (
      <View style={styles.eventItemContainer}>
      <BackgroundImage  image={this.props.image} resizeMode='cover'>
      <Text style={styles.eventItemTitle}>{this.props.title}</Text>
      <Text style={styles.eventItemSubtitle}>{this.props.subtitle}</Text>
      </BackgroundImage>
      <View style={styles.eventItemFooter}>
      <Text style={styles.eventItemAddress}>{this.props.subtitle}</Text>
      <Text style={styles.eventItemNote}>{this.props.note}</Text>
      </View>
      </View>
    )
  }

  renderTest () {
    const __style = [ this._styles.backgroundImage,
      { resizeMode: this.props.resizeMode || 'cover' }
    ]
    console.log('this.props', this.props);
    return (
      <View style={styles.eventItemContainer}>
      <Image source={this.props.image} style={__style}>
        <Text style={styles.eventItemTitle}>{this.props.title}</Text>
        <Text style={styles.eventItemSubtitle}>{this.props.subtitle}</Text>
      </Image>
      </View>
    )
  }


  render2() {
    return (
      <Text style={styles.eventsTitleText} onPress={this._onPress}>{this.props.title + ' ' + this.props.subtitle}</Text>
    )
  }
}

class _ListEventsScreen extends React.PureComponent {
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
  
  _onPressItem = (id) => {  // updater functions are preferred for transactional updates
    this.setState((state) => {  // copy the map rather than modifying state.
      const selected = new Map(state.selected); 
      selected.set(id, !selected.get(id)); // toggle
      return { selected }; 
    }); 
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
            return (

              <EventListItem 
                image={Images.presentation} 
                title={item.title} 
                subtitle={item.city + ', ' + item.address} 
                note={item.startTime + ' - ' + item.endTime}
                onPressItem={this._onPressItem}/>
          )}}
        />
      )
    } 
    return (
      <Text>No ingredients!</Text>
    )  
  }

  _renderItem = ({item}) => ( 
      <EventListItem key={item.id} onPressItem={this._onPressItem} selected={!!this.state.selected.get(item.id)} title={item.title} /> 
  );

  _renderTitle (title) {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <Text style={{fontSize: 20}}>{title}</Text>
      </View>
    )
  }

  render () {
    //const __onPress = this.props.screenProps.toggle;
    const __onPress = '';
    return (
      <View style={styles.mainContainer}>
        
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
          
        </ScrollView>
        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    country: state.events.country,
    city: state.events.city,
    result: state.events.result
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: (country, city) => dispatch(EventsActions.fetchEventsRequest(country, city))
})

const ListEventsScreen = connect(mapStateToProps, mapDispatchToProps)(_ListEventsScreen)

export default StackNavigator({
  ListEventsScreen: {screen: ListEventsScreen},
  CurriculumScreen: {screen: CurriculumScreen},
  RecipeScreen: {screen: RecipeScreen}
}, {
  initialRouteName: 'ListEventsScreen',
  headerMode: 'none',
  // Keeping this here for future when we can make
  navigationOptions: {
    header: {
      left: (
        <TouchableOpacity onPress={() => window.alert('pop')} ><Image source={Images.closeButton} style={{marginHorizontal: 10}} /></TouchableOpacity>
      ),
      style: {
        backgroundColor: '#3e243f'
      }
    }
  }
})
