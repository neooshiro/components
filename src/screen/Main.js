import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';

import Home from './Home';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen5 from './Screen5';

export default class Main extends Component {
  render() {
    return <RootNavigator></RootNavigator>;
  }
}

const RootNavigator = createSwitchNavigator(
  {
    Home: Home,
    Screen1: Screen1,
    Screen2: Screen2,
    Screen5: Screen5,
  },
  {
    initialRouteName: 'Home',
    // configuracao do Switch Navigator retornar para o InitialRoute
    backBehavior: "initialRoute"
  }
);