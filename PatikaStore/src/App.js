import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import products from './products.json';
import Card from './components/Card/Card';

const App = () => {
  const renderProducts = ({item}) => <Card product={item} />;
  const keyExtractor = item => item.id.toString();
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <View style={styles.card_container}>
        <FlatList
          style={styles.flat_list}
          ListHeaderComponent={() => (
            <TextInput style={styles.input} placeholder="Ara..." />
          )}
          data={products}
          renderItem={renderProducts}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 50,
  },
  header_text: {
    color: 'purple',
    fontWeight: '900',
    fontSize: 35,
  },
  input: {
    height: 50,
    color: 'gray',
    borderWidth: 0,
    borderRadius: 7,
    padding: 7,
    backgroundColor: '#ebeff2',
  },
});

export default App;
