import { StyleSheet } from 'react-native';

export const ContainerStyle = StyleSheet.create({
  containerHorizontal: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#006FFF',
  },
  containerVertical: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignContent: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#006FFF',
  },
  childHorizontal: {
    flexDirection: 'row',
    flex: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7FF7C',
  },
  childVertical: {
    flexDirection: 'column',
    flex: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B7FFE1',
  }
});