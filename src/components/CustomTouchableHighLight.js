import React, { Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import {TextStyle} from '../styles/style.text';
import {ComponentStyle} from '../styles/style.component';
import appColor from '../styles/default/app.color';
import appText from '../styles/default/app.text';

export default class CustomTouchableHighLight extends Component {

    static propTypes = {
        onPress: PropTypes.func.isRequired,
        submitText: PropTypes.string,
        containerStyle: PropTypes.object,
        textStyle: PropTypes.object,
        touchableStyle: PropTypes.object,
        disabled: PropTypes.bool,
        disabledTouchableColor: PropTypes.string,
        enabledTouchableColor: PropTypes.string
    }

    render() {
        const submitText = this.props.text ? this.props.text : appText.defaultSubmitButtonText;
        const disabledTouchableColor = this.props.disabledTouchableColor ? this.props.disabledTouchableColor : appColor.defaultDisabledTouchableHL;
        const enabledTouchableColor = this.props.enabledTouchableColor ? this.props.enabledTouchableColor : appColor.defaultEnabledTouchableHL;
        const textStyle = this.props.textStyle ? this.props.textStyle : TextStyle.defaultText;
        const touchableStyle = this.props.touchableStyle ? this.props.touchableStyle : ComponentStyle.defaultTouchableHLStyle;
        const containerStyle = this.props.containerStyle ? this.props.containerStyle : ComponentStyle.defaultView;

        return (
            <View style={containerStyle}>
                <TouchableHighlight
                        style={[touchableStyle,
                            {backgroundColor: this.props.disabled ? disabledTouchableColor : enabledTouchableColor}]}
                        onPress={() => {this.props.onPress()}}
                        underlayColor= {this.props.disabled ? disabledTouchableColor : enabledTouchableColor}>
                    <Text style={textStyle}>{submitText}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
			
			
			