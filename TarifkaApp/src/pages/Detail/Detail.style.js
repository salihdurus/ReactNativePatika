import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {flexGrow: 1},
  inner_container: {
    borderBottomWidth: 1,
    borderColor: '#c2c2c2',
    marginBottom: 5,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('screen').height / 2.5,
  },
  title: {
    color: '#a52b2a',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 5,
    marginTop: 5,
  },
  country: {
    color: '#a52b2a',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  instruction: {
    marginTop: 5,
    marginLeft: 5,
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  button_text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
