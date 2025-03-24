import { View, Text } from "react-native";
import React from "react";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./screens/WelcomeScreen";
import DashBoardScreen from "./screens/MainSystemScreen";
import TicketGeneratorScreen from "./screens/TicketGeneratorScreen";
import TellerScreen from "./screens/TellerScreen";
import MonitorScreen from "./screens/MonitorScreen";
import MainSystemScreen from "./screens/MainSystemScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainSystemScreen">
          <Stack.Screen
            name="WelcomeScreen"
            options={{ headerShown: false, animation: "none" }}
            component={WelcomeScreen}
          />

          <Stack.Screen
            name="MainSystemScreen"
            options={{ headerShown: false, animation: "none" }}
            component={MainSystemScreen}
          />

          <Stack.Screen
            name="TicketGeneratorScreen"
            options={{ headerShown: false, animation: "none" }}
            component={TicketGeneratorScreen}
          />

          <Stack.Screen
            name="TellerScreen"
            options={{ headerShown: false, animation: "none" }}
            component={TellerScreen}
          />

          <Stack.Screen
            name="MonitorScreen"
            options={{ headerShown: false, animation: "none" }}
            component={MonitorScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
