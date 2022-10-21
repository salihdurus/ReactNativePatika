import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Card-style';

const Card = ({product}) => {
  return (
    <View style={styles.out}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: product.imgURL}} />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.header}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.stock}>
          {!product.inStock ? 'Stokta Yok' : null}
        </Text>
      </View>
    </View>
  );
};

export default Card;
