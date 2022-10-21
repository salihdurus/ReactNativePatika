import {StyleSheet, Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 15,
  },
  header: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold',
  },
  image: {
    resizeMode: 'contain',
    marginTop: 10,
    borderRadius: 10,
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 3,
  },
  out: {
    flex: 1,
    backgroundColor: '#ebeff2',
    marginRight: 3,
    marginTop: 10,
    borderRadius: 10,
  },
  image_container: {alignItems: 'center'},
  price: {
    textAlignVertical: 'bottom',
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#8e8e8e',
  },
  stock: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text_container: {
    flex: 1,
    marginLeft: 15,
    marginRight: 20,
    // marginBottom: 3,
  },
});
