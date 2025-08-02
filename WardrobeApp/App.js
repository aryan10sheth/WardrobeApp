import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UploadScreen from './screens/UploadScreen';
import WardrobeScreen from './screens/WardrobeScreen';
import StyleScreen from './screens/StyleScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
        <Tab.Screen name="Wardrobe" component={WardrobeScreen} />
        <Tab.Screen name="Style" component={StyleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}