import React, { Component } from 'react';

import ReactNative, {ScrollView} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { TextStyle } from '../styles/style.text';
import { ComponentStyle } from '../styles/style.component';
import { ContainerStyle } from '../styles/style.container';

export default class CustomKeyboardAware extends Component {

  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <ScrollView>
        <KeyboardAwareScrollView
          innerRef={ref => { this.scroll = ref}}
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={ContainerStyle.containerVertical}
          scrollEnabled={false}
          enableOnAndroid={true}
          extraScrollHeight={1}
        >
          {this.props.children}
        </KeyboardAwareScrollView>
      </ScrollView>

    );
  }
}