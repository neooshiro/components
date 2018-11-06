import {StyleSheet} from 'react-native';

import {minHeight4FontSize, scaleFontSize} from '../components/ScaleUtils';
import appFont from './default/app.font';

export const TextStyle = StyleSheet.create({
  defaultTextInput: {
    fontSize: scaleFontSize(appFont.defaultTextInputFontSize,0.4),
    alignItems: 'center',
    backgroundColor: '#ffffff', 
    minWidth: 200, 
    minHeight: minHeight4FontSize(appFont.defaultTextInputFontSize,0.4)
  },
  textRegular: {
    fontSize: scaleFontSize(appFont.defaultTextFontSize,0.4),
    textAlign: 'center',
    margin: 10,
  },
  textBold: {
    fontSize: scaleFontSize(appFont.defaultTextFontSize,0.4),
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  defaultText: {
    color:'#fff',
    textAlign:'center',
    fontSize: scaleFontSize(appFont.defaultTextFontSize,0.4),
  }
});