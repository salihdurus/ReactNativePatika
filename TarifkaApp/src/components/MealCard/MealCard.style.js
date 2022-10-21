import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 5,
  },
  image: {
    flex: 1,
    borderRadius: 10,
    height: 250,
    overflow: 'hidden',
  },
  inner_container: {
    flex: 1,
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#00000099',
    textAlign: 'right',
    overflow: 'hidden',
    paddingRight: 5,
  },
});
