import { View, Text } from "react-native";
import React from "react";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./screens/WelcomeScreen";
import TicketGeneratorScreen from "./screens/ReceiptGeneratorScreen";
import TellerScreen from "./screens/TellerScreen";
import MonitorScreen from "./screens/MonitorScreen";
import MainSystemScreen from "./screens/MainSystemScreen";
import ReceiptScreen from "./screens/ReceiptScreen";
import { ReceiptProps } from "./types/ReceiptProp";
import { useState } from "react";
import ReceiptGeneratorScreen from "./screens/ReceiptGeneratorScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [queueInfo, setQueueInfo] = useState<ReceiptProps>({
    transaction: "try transaction",
    customerType: "pogi si shammy",
    queueNumber: "D-903",
    date: "March 3, 2003",
    time: "11:54",
    counter: "Counter 11",
  });

  const updateQueueInfo = (newQueueInfo: ReceiptProps) => {
    setQueueInfo(newQueueInfo)
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ReceiptGeneratorScreen">
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
            name="ReceiptGeneratorScreen"
            options={{ headerShown: false, animation: "none" }}
            component={(props: any)=> <ReceiptGeneratorScreen {...props} updateQueueInfo= {updateQueueInfo}/>}
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

          <Stack.Screen
            name="ReceiptScreen"
            options={{ headerShown: false, animation: "none" }}
            component={(props: any) => (
              <ReceiptScreen {...props} queueInfo={queueInfo} />
            )}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
