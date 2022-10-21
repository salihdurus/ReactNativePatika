import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#ebeff2',
    // padding: 5,
    margin: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  inner_container: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    marginLeft: 10,
    fontSize: 18,
  },
  image: {
    minWidth: 80,
    height: 50,
    resizeMode: 'contain',
    // marginLeft:10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
