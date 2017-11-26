import React, { PropTypes } from 'react'
import { Platform, StatusBar, StyleSheet, ScrollView, Text, Image, View, TouchableOpacity, FlatList, ListItem, Button } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'

import BackgroundImage from '../../App/Components/BackgroundImage'

// Navigation
import { StackNavigator } from 'react-navigation'

// Screens
import RecipeScreen from './RecipeScreen'

// Redux stuff
import { connect } from 'react-redux'
import ListRecipesActions from '../../App/Redux/ListRecipesRedux'

// StatusBar
const CustomStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

// Styles
import { Colors } from '../../App/Themes'
import styles from './Styles/ListRecipesScreenStyles'


const _DEBUG = false;

class RecipeListItem extends React.PureComponent {
  render () {
    return (
      <View style={styles.recipeItemContainer}>

        <View style={styles.recipeItemContainerText}>
          <Text style={styles.recipeItemTitle}>{this.props.title}</Text>
          <Text style={styles.recipeItemDescription}>{this.props.description}</Text>
        </View>

        <View style={styles.recipeItemContainerImage}>
          <Image 
            source={{uri: this.props.image, scale: 3}} 
            style={ {flex: 1, width: null, height: null, resizeMode: 'cover'} } />

        </View>

      </View>


    )
  }
}

class ListRecipesScreen extends React.PureComponent {
  state = {selected: {}}; 

  static propTypes = {
    test: PropTypes.string
  }
  
  componentWillMount = () => {
    console.log('✨ ListRecipesScreen props', this.props);

    if (_DEBUG) {
      this.props.fetchRecipes(['0001', '0002']);
      return;
    }

    if (this.props && this.props.screenProps) {
      if (this.props.screenProps.selectedEvent === null) {
        this.props.screenProps.toggle();
      } else {
      this.props.fetchRecipes(this.props.screenProps.selectedEvent.recipes);
      }
    }
  }

  openRecipe = () => {
    this.props.navigation.navigate('RecipeScreen')
  }

  _keyExtractor = (item, index) => item.id; 
  
  _onPressItem = (recipe) => {  // updater functions are preferred for transactional updates
    console.log('_onPressItem', recipe);
    this.props.selectRecipe(recipe);
  };

  renderRecipes = () => {
    console.log('ListRecipesScreen->renderRecipes', this.props);
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
              <RecipeListItem 
                image={item.image} 
                title={item.title} 
                description={item.description}
                />
              </TouchableOpacity>
          )}}
        />
      )
    } 
    return (
      <Text>No recipes!</Text>
    )  
  }


  /*
  <CustomStatusBar backgroundColor={Colors.background} barStyle="light-content" />
        <View style={styles.appBar}>
        <Text style={styles.appBarText}>{'Recipes list'}</Text>
        </View>
  */

  render () {
    var __onPress = null;
    if (_DEBUG) {
      __onPress = '';
    } else {
      __onPress = this.props.screenProps.toggle;
    }

    console.log('At recipesScreen __onPress', __onPress);
    //const __onPress = '';

    const selectedEvent = (this.props.screenProps == null || this.props.screenProps.selectedEvent == null) ? 
       require('./sampleEvent.json') : this.props.screenProps.selectedEvent;

    console.log('selectedEvent', selectedEvent);

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
              source={{uri: selectedEvent.image}} 
              style={ {flex: 1, width: null, height: null, resizeMode: 'cover'} } />

          </View>

          <View style={styles.banner}>
            <Text style={styles.bannerTitle}>{selectedEvent.title}</Text>
            <Text style={styles.bannerSubtitle}>{selectedEvent.subtitle}</Text>
          </View>


          {this.renderRecipes()}
          
        </ScrollView>
        
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipeIds: state.recipes.recipeIds,
    result: state.recipes.result,
    selectedRecipe: state.recipes.selectedRecipe
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: (event) => dispatch(ListRecipesActions.fetchRecipesRequest(event)),
  selectRecipe: (selectedRecipe) => dispatch(ListRecipesActions.selectRecipe(selectedRecipe)),
  toggleModal: () => dispatch(ListRecipesActions.toggleModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ListRecipesScreen)