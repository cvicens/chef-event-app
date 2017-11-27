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

const _DEBUG = false;

const WINE_TYPE_DESCR = {
  MEDIUM_RED: "Medium- to Full-Bodied Wines. Red: Barbera, Bordeaux, Brunello, Cabernet Franc, Cabernet Sauvignon, Garnacha/Grenache, Malbec, Merlot, Montepulciano, Burgundy/Pinot Noir, Rhône, Tempranillo (Rioja), Syrah/Shiraz, Zinfandel. White: Burgundy/Chardonnay. Full-Bodied Wines.",
  BOLD_RED: "Some wines that are normally over this alcohol level and considered full-bodied are Zinfandel, Syrah/Shiraz, Cabernet, Merlot and Malbec. While the majority of wines over 13.5% alcohol are usually red, Chardonnay is a great example of a white that often can also be considered full-bodied. Cabernet Sauvignon, Monastrell, Rioja, Aglianico, Toro, Syrah",
  DESSERT: "Late harvest, Ice wine, Sherry, Port. Dessert wine gets its name because it tends to be sweeter and comes after a meal. Alcohol (usually brandy) is added to a dessert wine so that it can retain more of its natural sugars, which are usually used up during the fermentation process.",
  ROSE: "Rosé happens when the skins of red grapes touch wine for only a short time. Where some red wines ferment for weeks at a time on red grape skins, rosé wines are stained red for just a few hours. White Merlot, White Zinfandel, Grenache rosé",
  LIGHT_RED: "Good examples of these wines are Rose, French Burgundy, Pinot Grigio and Sauvignon Blanc. Finally, any wine over 13.5% alcohol is considered full-bodied. Some wines that are normally over this alcohol level and considered full-bodied are Zinfandel, Syrah/Shiraz, Cabernet, Merlot and Malbec.", 
  SPARKLING: "Sparkilng wine, Champange, Prosecco, Cava. Sparkling wine is wine that has significant carbonation, which can occur as a natural part of the fermentation process or via carbon dioxide injection after fermentation. When reading sparkling wine labels, you’ll also encounter terms that indicate its sweetness/dryness.",
  SWEET_WHITE: "Sweet wines are a magnet drawing would-be wine lovers away from sweet cocktails, colas, and teas to the wide world of wine. First dips into dessert wines tend towards white wines that lie on the sweeter side of the spectrum. Sweeter-styled white wines are significantly easier to find than their sweet red wine counterparts. When someone asks for a -sweet wine- they are really communicating that they prefer wines that are not dry.Moscato, Malvasia, Riesling",
  DRY_WHITE: "A dry white is a wine with residual sugar lower than 1 percent. This may include many varietals, including Chardonnay, Riesling, Sauvignon Blanc, Pinot Gris (Pinot Grigio), Viognier, and many others.",
  RICH_WHITE: "Full-bodied white wines have often been confused with red wines when served in black glassware. Rich white wines typically undergo similar treatments as red wines in the winery to achieve the bold flavor, and thus have some flavor similarities. Chardonnay, Roussane"
};

const WINE_TYPE_TITLES = {
  MEDIUM_RED: "Medium Red",
  BOLD_RED: "Bold Red",
  DESSERT: "Dessert wine",
  ROSE: "Rosé",
  LIGHT_RED: "Light Red", 
  SPARKLING: "Sparkilng wine",
  SWEET_WHITE: "Sweet White",
  DRY_WHITE: "Dry White",
  RICH_WHITE: "Rich White"
}

class WineTypeItem extends React.PureComponent {
  render () {
    return (
      <View style={styles.winePairingItemContainer}>

        <View style={styles.winePairingItemContainerImage}>
          <Image 
            source={this.props.image} 
            style={ {flex: 1, width: null, height: null, resizeMode: 'cover'} } />
        </View>

        <View style={styles.winePairingItemContainerText}>
          <Text style={styles.winePairingItemTitle}>{this.props.type}</Text>
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
      this.props.fetchWinePairing('FISH');
      return;
    }

    if (this.props && this.props.screenProps) {
      if (this.props.screenProps.selectedRecipe === null) {
        this.props.screenProps.toggle();
      } else {
        this.props.fetchWinePairing(this.props.screenProps.selectedRecipe.foodType);
      }
    }
  }

  _keyExtractor = (item, index) => index; 
  
  _onPressItem = (wineType) => {  // updater functions are preferred for transactional updates
    console.log('_onPressItem', wineType);
    //this.props.selectRecipe(recipe);
  };

  renderWineTypes = () => {
    console.log('WinePairingsScreen->renderWinePairings', this.props);
    if (this.props.result && this.props.result.wineTypes && this.props.result.wineTypes.constructor === Array) {
      return (
        <FlatList 
          data={this.props.result.wineTypes}
          keyExtractor={(item, index) => index}
          renderItem={({ item }) => {
            console.log('item', item);
            console.log('this._onPressItem', this._onPressItem);
            return (
              <TouchableOpacity onPress={() => this._onPressItem(item)}>
              <WineTypeItem 
                type={WINE_TYPE_TITLES[item]}
                image={Images[item]} 
                description={WINE_TYPE_DESCR[item]}
                />
              </TouchableOpacity>
          )}}
        />
      )
    } 
    return (
      <Text>No wine pairing!</Text>
    )  
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

          {this.renderWineTypes()}
          
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
  //toggleModal: () => dispatch(WinePairingActions.toggleModal()),
})

export default connect(mapStateToProps, mapDispatchToProps)(WinePairingScreen)