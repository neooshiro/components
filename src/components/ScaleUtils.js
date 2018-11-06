import { Dimensions, PixelRatio, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export function widthPercentage2DP(widthPercent) {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
}

export function heightPercentage2DP(heightPercent) {
  const elemHeight = paseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
}

export function scaleFontSize(fontSize, factor) {
  const guidelineBaseWidth = 350;

  let scale = screenWidth / guidelineBaseWidth * fontSize;

  return fontSize + (scale - fontSize) * factor;
}

export function minHeight4FontSize(fontSize, factor) {
  const guidelineBaseWidth = 350;
  let scale = screenWidth / guidelineBaseWidth * fontSize;
  let newFontSize = fontSize + (scale - fontSize) * factor;
  return PixelRatio.roundToNearestPixel(newFontSize*1.3);
}