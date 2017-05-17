// React Native
import React from 'react'
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator } from 'react-native'
import { Metrics, Images } from './DevTheme'
import FullButton from '../../App/Components/FullButton'
import RoundedButton from '../../App/Components/RoundedButton'

// Redux stuff
import { connect } from 'react-redux'
import RecipeActions from '../../App/Redux/RecipeRedux'

// Styles
import styles from './Styles/RecipeScreenStyles'



class RecipeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visibleHeight: Metrics.screenHeight
    }
  }

  componentWillMount = () => {
    this.props.fetchRecipe();
  }

  renderIngredients = () => {
    if (this.props.ingredients && this.props.ingredients.constructor === Array) {
      let i = 0;
      return this.props.ingredients.map((ingredient) => {
        i++;
        return (
          <View key={i} style={{flex: 1, flexDirection: 'row',}}>
            <View style={styles.recipeIngredientsColumn}>
              <Text style={[styles.recipeText, {margin: 10}]}>▪︎ {ingredient}</Text>
            </View>
          </View>
        )
      })
    }

    return (
      <Text>No ingredients!</Text>
    )
    
  }

  renderDirections = () => {
    if (this.props.directions && this.props.directions.constructor === Array) {
      let i = 0;
      return this.props.directions.map((direction) => {
        i++;
        return (
          <View key={i} style={{flex: 1, flexDirection: 'row',}}>
            <View style={styles.recipeDirectionColumnA}>
              <Text style={[styles.recipeText]}>{i}</Text>
            </View>
            <View style={styles.recipeDirectionColumnB}>
              <Text style={[styles.recipeText, {margin: 10}]}>{direction}</Text>
            </View>
          </View>
        )
      })
    }

    return (
      <Text>No Directions!</Text>
    )
    
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
              Error while fetching the recipe
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
          <View style={styles.recipeHeader}>
            <View style={styles.recipeHeaderContainer}>
              <Text style={styles.recipeTitleText}>{this.props.title}</Text>            
            </View>            
          </View>


          <View style={[styles.recipeSection, styles.recipeSectionColumn]}>
            <View style={styles.backdropContainer}>
              <Image 
                style={styles.backdrop} 
                source={Images.ingredients}>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>Ingredients</Text>
                  </View>
              </Image>
            </View>
            {this.renderIngredients()}
          </View>

          <View style={[styles.recipeSection, styles.recipeSectionColumn]}>
            <View style={styles.backdropContainer}>
              <Image 
                style={styles.backdrop} 
                source={Images.directions}>
                  <View style={styles.backdropView}>
                    <Text style={styles.headline}>Directions</Text>
                  </View>
              </Image>
            </View>
            {this.renderDirections()}
          </View>
          
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.recipe.fetching,
    error: state.recipe.error,
    result: state.recipe.result,
    title: state.recipe.title, 
    photo: state.recipe.photo, 
    ingredients: state.recipe.ingredients, 
    directions: state.recipe.directions, 
    errorMessage: state.recipe.errorMessage,
    errorReason: state.recipe.errorReason,
    errorDescription: state.recipe.errorDescription,
    errorRecoverySuggestion: state.recipe.errorRecoverySuggestion
  }
}


// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  fetchRecipe: () => dispatch(RecipeActions.fetchRecipeRequest('0001'))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeScreen)
