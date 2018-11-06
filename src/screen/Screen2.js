import React, { Component } from 'react';
import ReactNative, {
  Text, TextInput, View, ScrollView,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { TextStyle } from '../styles/style.text';
import { ComponentStyle } from '../styles/style.component';
import { ContainerStyle } from '../styles/style.container';

import CustomTouchableHighLight from '../components/CustomTouchableHighLight';

export default class Screen2 extends Component {

  _scrollToInput(reactNode) {
    this.scroll.props.scrollToFocusedInput(reactNode);
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAwareScrollView
          innerRef={ref => { this.scroll = ref }}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={ContainerStyle.containerVertical}
          scrollEnabled={false}
          enableOnAndroid={true}
          extraScrollHeight={10}
        >
          <ScrollView>
            <View style={[ContainerStyle.childHorizontal, { justifyContent: 'space-around' }]}>
              <Text style={TextStyle.textRegular}>text1</Text>
              <TextInput style={TextStyle.defaultTextInput}
                onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))}
              />
            </View>
            <View style={[ContainerStyle.childHorizontal, { justifyContent: 'space-around' }]}>
              <Text style={TextStyle.textBold}>text2</Text>
              <TextInput style={TextStyle.defaultTextInput}
                onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))}
              />
            </View>

            <View style={[ContainerStyle.childHorizontal, { justifyContent: 'space-around' }]}>
              <Text style={TextStyle.textRegular}>verylongtext?????</Text>
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
            <View style={ContainerStyle.childHorizontal}>
              <TextInput style={TextStyle.defaultTextInput}
                onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))} />
            </View>
            <View style={ContainerStyle.childHorizontal}>
              <TextInput style={TextStyle.defaultTextInput}
                onFocus={(event) => this._scrollToInput(ReactNative.findNodeHandle(event.target))} />
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
        <CustomTouchableHighLight onPress={() => this.props.navigation.navigate('Home')}
          disabled={false}
        />
      </ScrollView>
    );
  }
}