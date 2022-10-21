import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import styles from './Categories.style';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(`${Config.API_URL}/categories.php`);

  const handleCategorySelect = strCategory => {
    navigation.navigate('MealsScreen', {strCategory});
  };
  const renderCategories = ({item}) => {
    return (
      <CategoryCard
        category={item}
        onSelect={() => {
          handleCategorySelect(item.strCategory);
        }}
      />
    );
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </SafeAreaView>
  );
};
export default Categories;
