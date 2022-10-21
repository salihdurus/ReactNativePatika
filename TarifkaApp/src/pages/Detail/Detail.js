import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  Linking,
} from 'react-native';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Detail.style';

const Detail = ({route}) => {
  const id = route.params;
  const {data, loading, error} = useFetch(
    `${Config.API_URL}/lookup.php?i=${id}`,
  );

  async function openUrl() {
    await Linking.openURL(data.meals[0].strYoutube);
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{uri: data.meals[0].strMealThumb}}
        />

        <View style={styles.inner_container}>
          <Text style={styles.title}>{data.meals[0].strMeal}</Text>
          <Text style={styles.country}>{data.meals[0].strArea}</Text>
        </View>
        <Text style={styles.instruction}>{data.meals[0].strInstructions}</Text>
        <TouchableHighlight style={styles.button} onPress={openUrl}>
          <Text style={styles.button_text}>Watch on Youtube</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};
export default Detail;
