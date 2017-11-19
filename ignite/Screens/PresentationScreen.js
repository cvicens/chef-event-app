import React, { PropTypes } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import { Images } from './DevTheme'
import ButtonBox from './ButtonBox'

import BackgroundImage from '../../App/Components/BackgroundImage'

// Navigation
import { StackNavigator } from 'react-navigation'

// Screens
import APITestingScreen from './APITestingScreen'
import ComponentExamplesScreen from './ComponentExamplesScreen'
import DeviceInfoScreen from './DeviceInfoScreen'
import PluginExamplesScreen from './PluginExamplesScreen'
import ThemeScreen from './ThemeScreen'
import FaqScreen from './FaqScreen'

import CurriculumScreen from './CurriculumScreen'
import RecipeScreen from './RecipeScreen'

// Styles
import styles from './Styles/PresentationScreenStyles'

class PresentationScreen extends React.Component {
  static propTypes = {
    test: PropTypes.string
  }
  
  componentWillMount = () => {
    console.log('✨ PresentationScreen props', this.props);
    if (this.props.screenProps.eventId === null || this.props.screenProps.eventId.length <= 0) {
      this.props.screenProps.toggle();
    }
  }

  openCurriculum = () => {
    this.props.navigation.navigate('CurriculumScreen')
  }

  openRecipe = () => {
    this.props.navigation.navigate('RecipeScreen')
  }

  openComponents = () => {
    this.props.navigation.navigate('ComponentExamplesScreen')
  }

  openUsage = () => {
    this.props.navigation.navigate('PluginExamplesScreen')
  }

  openApi = () => {
    this.props.navigation.navigate('APITestingScreen')
  }

  openTheme = () => {
    this.props.navigation.navigate('ThemeScreen')
  }

  openDevice = () => {
    this.props.navigation.navigate('DeviceInfoScreen')
  }

  openFaq = () => {
    this.props.navigation.navigate('FaqScreen')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        
        <TouchableOpacity onPress={this.props.screenProps.toggle} style={{
          position: 'absolute',
          paddingTop: 30,
          paddingHorizontal: 10,
          zIndex: 10
        }}>
          <Image source={Images.closeButton} />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>

          <View style={styles.headerContent}>
  
            <BackgroundImage image={Images.presentation} resizeMode='cover'>
            <Text style={styles.headerSectionText}>
              Welcome to this experience Joe and Javier, here you'll cook with a real cook and at the same time you'll learn how easy it is to create an App
            </Text>
            </BackgroundImage>

          </View>

          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openCurriculum} style={styles.baseLeftButton} image={Images.components} text='Curriculum' />
            <ButtonBox onPress={this.openRecipe} style={styles.baseRightButton} image={Images.usageExamples} text='Recipe' />
          </View>
          <View style={styles.buttonsContainer}>
            <ButtonBox onPress={this.openDevice} style={styles.baseDownLeftButton} image={Images.deviceInfo} text='Device Info' />
            <ButtonBox onPress={this.openFaq} style={styles.baseDownRightButton} image={Images.faq} text='FAQ' />
          </View>
           
        </ScrollView>
        
      </View>
    )
  }
}

export default StackNavigator({
  PresentationScreen: {screen: PresentationScreen},
  APITestingScreen: {screen: APITestingScreen},
  ComponentExamplesScreen: {screen: ComponentExamplesScreen},
  CurriculumScreen: {screen: CurriculumScreen},
  RecipeScreen: {screen: RecipeScreen},
  DeviceInfoScreen: {screen: DeviceInfoScreen},
  PluginExamplesScreen: {screen: PluginExamplesScreen},
  ThemeScreen: {screen: ThemeScreen},
  FaqScreen: {screen: FaqScreen}
}, {
  initialRouteName: 'PresentationScreen',
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
