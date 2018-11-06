import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

import {TextStyle} from '../styles/style.text';
import {ContainerStyle} from '../styles/style.container';

export default class Home extends Component {
  render() {
    return (
        <View style={ContainerStyle.containerVertical}>
            <View style={ContainerStyle.containerHorizontal}>    
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('Screen1')} 
                style={ContainerStyle.childHorizontal} >
                    <Text style={TextStyle.textRegular}>First Child</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={()=>this.props.navigation.navigate('Screen2')} 
                style={ContainerStyle.childHorizontal} >
                    <Text style={TextStyle.textRegular}>Second Child</Text>
                </TouchableHighlight>
            </View>
            <View style={ContainerStyle.containerHorizontal}>    
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('Screen5')} 
                style={ContainerStyle.childHorizontal} >
                    <Text style={TextStyle.textRegular}>Fifth Child</Text>
                </TouchableHighlight>
            </View>
            <View style={ContainerStyle.containerHorizontal}>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('Screen3')} 
                style={ContainerStyle.childHorizontal} >
                    <Text style={TextStyle.textRegular}>Third Child</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>this.props.navigation.navigate('Screen4')} 
                style={ContainerStyle.childHorizontal} >
                    <Text style={TextStyle.textRegular}>Fourth Child</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
  }
}