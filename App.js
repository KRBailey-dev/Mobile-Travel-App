import React, { Component } from "react";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ShoppingScreen from "./app/screens/ShoppingScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={WelcomeScreen} />
          <Stack.Screen name="Travel" component={ShoppingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
