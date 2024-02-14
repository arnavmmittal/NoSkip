import React from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import PollScreen, { HomeStackScreen } from '../screens/PollScreen';
import Leaderboard from '../screens/Leaderboard';
import Settings from '../screens/Settings';
import PointsDisplay from '../screens/PointsDisplay';

const Tab = createBottomTabNavigator();

const AppNav = () => { 
    return (
      <Tab.Navigator screenoptions = {{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} screenoptions = {{ headerShown: false }} /> 
        
        <Tab.Screen name="Leaderboard" component={Leaderboard} screenoptions = {{ headerShown: false }}/>
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Points" component={PointsDisplay} />
      </Tab.Navigator>
    );
  };

export default AppNav;


