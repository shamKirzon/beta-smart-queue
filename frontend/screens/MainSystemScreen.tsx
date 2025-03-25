import { View, Text, TouchableOpacity, Alert, Dimensions } from "react-native";
import React, { useState } from "react";

const { width, height } = Dimensions.get("window"); // Get screen size

const MainSystemScreen = ({ navigation }: any) => {
  const [darkMode, setDarkMode] = useState(false);

  function onClickDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <View className="flex-1 p-4 mt-[2rem] bg-zinc-100 gap-y-[6rem] items-center">
      <View className="gap-y-[2rem] pt-[2.5rem]">
        {["TicketGeneratorScreen", "TellerScreen", "MonitorScreen"].map(
          (screen, index) => (
            <TouchableOpacity
              key={index}
              className="bg-zinc-800 justify-center rounded-lg"
              style={{ width: width * 0.6, height: height * 0.15 }} // 60% width, 15% height
              onPress={() => navigation.navigate(screen)}
            >
              <Text className="text-center text-white" style={{ fontSize: width * 0.08 }}>
                {screen.replace("Screen", "").toUpperCase()}
              </Text>
            </TouchableOpacity>
          )
        )}
      </View>

      <View className="w-auto self-start flex-row">
        <TouchableOpacity
          className="bg-zinc-800 justify-center rounded-full"
          style={{ width: width * 0.35, height: height * 0.08 }} // 35% width, 8% height
          onPress={() => navigation.navigate("WelcomeScreen")}
        >
          <Text className="text-center text-white" style={{ fontSize: width * 0.07 }}>
            BACK
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-zinc-800 justify-center rounded-full ml-[4rem]"
          style={{ width: width * 0.35, height: height * 0.08 }} // 35% width, 8% height
          onPress={() =>
            Alert.alert(
              "CAMERA",
              "May camera dapat to pero sakana wala pang oras ahhahah ",
              [{ text: "sige sabi mo eh" }, { text: "walang may pake" }]
            )
          }
        >
          <Text className="text-center text-white" style={{ fontSize: width * 0.07 }}>
            RESET
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainSystemScreen;
