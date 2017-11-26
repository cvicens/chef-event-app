import React, { PropTypes } from 'react'
import { Platform, StatusBar, StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, FlatList, ListItem, Button } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'

import BackgroundImage from '../../App/Components/BackgroundImage'

// Redux stuff
import { connect } from 'react-redux'
import WinePairingActions from '../../App/Redux/WinePairingRedux'

// Styles
import { Colors } from '../../App/Themes'
import styles from './Styles/WinePairingScreenStyles'


const _DEBUG = true;

class WinePairingItem extends React.PureComponent {
  render () {
    return (
      <View style={styles.winePairingItemContainer}>

        <View style={styles.winePairingItemContainerImage}>
          <Image 
            source={{uri: this.props.image, scale: 3}} 
            style={ {flex: 1, width: null, height: null, resizeMode: 'cover'} } />

        </View>

        <View style={styles.winePairingItemContainerText}>
          <Text style={styles.winePairingItemTitle}>{this.props.title}</Text>
          <Text style={styles.winePairingItemDescription}>{this.props.description}</Text>
        </View>

      </View>

    )
  }
}

class WinePairingScreen extends React.PureComponent {
  state = {selected: {}}; 

  static propTypes = {
    test: PropTypes.string
  }
  
  componentWillMount = () => {
    console.log('✨ WinePairingScreen props', this.props);

    if (_DEBUG) {
      this.props.fetchWinePairing(['FISH']);
      return;
    }

    if (this.props && this.props.screenProps) {
      if (this.props.screenProps.selectedRecipe === null) {
        this.props.screenProps.toggle();
      } else {
        this.props.fetchRecipes(this.props.screenProps.selectedRecipe.foodType);
      }
    }
  }

  render () {
    var __onPress = null;
    if (_DEBUG) {
      __onPress = '';
    } else {
      __onPress = this.props.screenProps.toggle;
    }

    console.log('At winePairingScreen __onPress', __onPress);
    //const __onPress = '';

    const selectedRecipe = (this.props.screenProps == null || this.props.screenProps.selectedRecipe == null) ? 
       require('./sampleRecipe.json') : this.props.screenProps.selectedRecipe;

    console.log('selectedRecipe', selectedRecipe);

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

          <View style={styles.mainContainerHeader}>
            <Image 
              source={{uri: selectedRecipe.image}} 
              style={ {flex: 1, width: null, height: null, resizeMode: 'cover'} } />

          </View>

          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>{selectedRecipe.title}</Text>
            <Text style={styles.bannerSubtitle}>{selectedRecipe.description}</Text>
          </View>

          <WinePairingItem wineTypes={this.props.result.wineTypes} />
          
        </ScrollView>
        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.winepairing.result
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  fetchWinePairing: (foodType) => dispatch(WinePairingActions.fetchWinePairingRequest(foodType)),
  toggleModal: () => dispatch(WinePairingActions.toggleModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WinePairingScreen)