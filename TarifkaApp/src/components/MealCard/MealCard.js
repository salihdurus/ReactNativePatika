import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './MealCard.style';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{uri: meal.strMealThumb}}
          resizeMode="cover">
          <View style={styles.inner_container}>
            <Text style={styles.title}>{meal.strMeal}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MealCard;
