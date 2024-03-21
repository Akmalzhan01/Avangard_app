import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyCourse from "../screens/MyCourse";
import LeaderBoard from "../screens/LeaderBoard";
import ProfileScreen from "../screens/ProfileScreen";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import HomeScreenNavigation from "./HomeScreenNavigation";

const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My-course"
        component={MyCourse}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Leader-board"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="leaderboard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="supervised-user-circle" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
// 56:35