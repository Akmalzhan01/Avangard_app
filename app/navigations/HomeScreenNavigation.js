import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import CourseDetailScreen from '../screens/CourseDetailScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()
export default function HomeScreenNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Homes' component={HomeScreen} />
      <Stack.Screen name='course-detail' component={CourseDetailScreen} />
    </Stack.Navigator>
  )
}