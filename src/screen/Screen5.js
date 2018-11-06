import React, { Component } from 'react';
import { Text, View, SectionList, TouchableHighlight } from 'react-native';

import { TextStyle } from '../styles/style.text';
import { ContainerStyle } from '../styles/style.container';
import { ComponentStyle } from '../styles/style.component';

import { list1 } from '../entries/list1.entries';

export default class Screen5 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      details: 'default text'
    }
  }

  setDetailsText = (section, index) => {
    console.log(section.details[index]);
    this.setState({ details: section.details[index] });
  }

  renderSectionList = () => {
    return (
      <SectionList
        renderItem={({ item, index, section }) =>
          <TouchableHighlight style={ComponentStyle.headContainer} onPress={() => this.setDetailsText(section, index)}>
            <Text key={index} style={TextStyle.textRegular}>{item}</Text>
          </TouchableHighlight>
        }
        renderSectionHeader={({ section: { title } }) =>
          <View style={ComponentStyle.itemContainer}>
            <Text style={TextStyle.textBold}>{title}</Text>
          </View>
        }
        sections={list1}
        keyExtractor={(item, index) => item + index}
      />
    );
  }

  renderSectionDescription = () => {
    return (
      <Text style={TextStyle.textRegular}>{this.state.details}</Text>
    );
  }

  render() {
    return (
      <View style={ContainerStyle.containerHorizontal}>
        <View style={ContainerStyle.childHorizontal}>
          {this.renderSectionList()}
        </View>

        <View style={ContainerStyle.childHorizontal}>
          {this.renderSectionDescription()}
        </View>
      </View>
    );
  }
}