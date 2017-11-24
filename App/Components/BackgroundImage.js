import React, { PropTypes } from 'react'
import { Image, StyleSheet } from 'react-native'

export default class BackgroundImage extends React.Component {
    static propTypes = {
        image: PropTypes.any,
        resizeMode: PropTypes.string
    }

    _styles = StyleSheet.create({
        backgroundImage: {
            flex: 1,
            width: null,
            height: null
        }
    })

    render() {
        const __style = [ this._styles.backgroundImage,
            { resizeMode: this.props.resizeMode || 'cover' }
        ]
        return (
            <Image 
                source={this.props.image}
                style={__style}>

                  {this.props.children}

            </Image>
        )
    }
}