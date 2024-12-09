import React, { useState } from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/src/Home';
import Costmer from '@/src/Costmer';
import Admin from '@/src/Admin';
const Stack = createStackNavigator();

export default function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple', price: 1.00 },
    { id: 2, name: 'Banana', price: 0.50 },
    { id: 3, name: 'Carrot', price: 0.30 },
    { id: 4, name: 'Bread', price: 2.50 },
  ]);

  return (
    <NavigationIndependentTree>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home"  options={{headerShown:false}}>
          {() => <Home products={products} setProducts={setProducts} />}
        </Stack.Screen>
        <Stack.Screen name="Admin" options={{headerShown:false}}>
          {() => <Admin products={products} setProducts={setProducts} />}
        </Stack.Screen>
        <Stack.Screen name="Costmer" options={{headerShown:false}}>
          {() => <Costmer products={products} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationIndependentTree>
  );
}
