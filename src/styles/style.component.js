import { StyleSheet } from 'react-native';

export const ComponentStyle = StyleSheet.create({
  headContainer: {
    backgroundColor: '#73FDE2',
  },
  itemContainer: {
    backgroundColor: '#DBFFF9',
  },
  defaultTouchableHLStyle: {
    flex:1,
    flexShrink:1,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  defaultView: {
    display: 'flex',
    flex: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
});