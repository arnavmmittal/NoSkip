import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppNav from "./navigation/AppNav";

const App = () => {
  return (
    <NavigationContainer>
      <AppNav />
    </NavigationContainer>
  );
};

export default App;
