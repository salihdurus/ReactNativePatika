import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Detail from './pages/Detail';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: '#faa70c'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            title: 'Meals',
            headerTitleStyle: {color: '#faa70c'},
            headerTitleAlign: 'center',
            headerTintColor: '#faa70c',
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: 'Detail',
            headerTitleStyle: {color: '#faa70c'},
            headerTitleAlign: 'center',
            headerTintColor: '#faa70c',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
