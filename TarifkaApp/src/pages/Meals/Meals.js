import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import MealCard from '../../components/MealCard';
import styles from './Meals.style';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.API_URL}/filter.php?c=${strCategory}`,
  );

  const renderMeals = ({item}) => {
    return (
      <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
    );
  };

  const handleMealSelect = idMeal => {
    navigation.navigate('DetailScreen', idMeal);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList data={data.meals} renderItem={renderMeals} />
      </View>
    </SafeAreaView>
  );
};
export default Meals;
