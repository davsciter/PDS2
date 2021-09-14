import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function MyStack() {
  return (    
    <Stack.Navigator>
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}