import React from 'react'
import { View, Modal, Text, StyleSheet, Fonts, Metrics } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import RoundedButton from '../../App/Components/RoundedButton'
import PresentationScreen from './PresentationScreen'

// Styles
const styles = StyleSheet.create({
  sectionText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    color: '#E0D7E5'
  }
})

export default class LaunchButton extends React.Component {
  test = 'default';

  constructor (props) {
    super(props)
    this.state = {
      showModal: false, // TODO: Change and see why setState is not working! Redux?
      disabled: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal, kkk: 'wqwerqwer' }, function () {
        console.log('&&&&&&> state =>', this.state);
    });
  }

  componentWillReceiveProps(nextProps) {
      console.log('&&&&&&> props', this.props, 'nextProps', nextProps);
      this.setState({...this.state, disabled: nextProps.disabled});
  }

  render () {
    console.log('&&&&&&> render launchbuton showModal', this.state.showModal, ' disabled ',this.state.showModal, ' kkk', this.state.kkk);
    return (
      <View>
        <RoundedButton onPress={this.toggleModal} disabled={this.state.disabled}>
          Let's cook!
        </RoundedButton>
        <Modal
          visible={this.state.showModal}
          onRequestClose={this.toggleModal}>
          <PresentationScreen screenProps={{ toggle: this.toggleModal }} />
        </Modal>
      </View>
    )
  }
}