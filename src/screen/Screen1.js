import React, { Component } from 'react';
import ReactNative, {
  Text, TextInput, View, ScrollView,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { TextStyle } from '../styles/style.text';
import { ComponentStyle } from '../styles/style.component';
import { ContainerStyle } from '../styles/style.container';

import CustomTouchableHighLight from '../components/CustomTouchableHighLight';
import CustomKeyboardAware from '../components/CustomKeyboardAware';

export default class Screen1 extends Component {

  constructor(props){
    super(props);
    this.childRef = React.createRef();
  }

  _scrollToInput(reactNode) {
    this.childRef.scrollToFocusedInput(reactNode);
  }

  render() {
    return (
      <CustomKeyboardAware ref={this.childRef}>
        <ScrollView>
          <View style={ContainerStyle.childHorizontal}>
            <Text style={TextStyle.textRegular}>text1</Text>
            <TextInput style={TextStyle.defaultTextInput}
              onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))}
            />
          </View>
          <View style={ContainerStyle.childHorizontal}>
            <Text style={TextStyle.textBold}>text2</Text>
            <TextInput style={TextStyle.defaultTextInput}
              onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))}
            />
          </View>

          <View style={ContainerStyle.childHorizontal}>
            <Text style={TextStyle.textRegular}>verylongtext???</Text>
            <TextInput style={TextStyle.defaultTextInput}
              onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))} />
          </View>

          <View style={ContainerStyle.childHorizontal}>
            <TextInput style={TextStyle.defaultTextInput}
              onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))} />
          </View>

          <View style={ContainerStyle.childHorizontal}>
            <TextInput style={TextStyle.defaultTextInput}
              onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))} />
          </View>
          <View style={ContainerStyle.childHorizontal}>
            <TextInput style={TextStyle.defaultTextInput}
              onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))} />
          </View>
        </ScrollView>
        <CustomTouchableHighLight onPress={() => this.props.navigation.navigate('Home')}
          disabled={false}
          containerStyle={ComponentStyle.defaultView}
        />
      </CustomKeyboardAware>
    );
  }
}