import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useState } from "react";

const WelcomeScreen = ({ navigation }: any) => {
  const [loading, setLoading] = useState(false);

  function onClickStart() {
    setLoading(!loading);

    setTimeout(() => {
      navigation.navigate("MainSystemScreen");
    }, 2000);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center items-center bg-zinc-100">
        <View className="relative pb-7">
          <Image
            source={require("../assets/images/queue.png")}
            className="w-48 h-48"
          />
          <Text className="absolute mt-[140px] ml-[15px] text-[24px] font-bold text-black">
            SmartQueue
          </Text>
        </View>

        {loading ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <TouchableOpacity
            className="w-48 bg-zinc-800 h-16 items-center justify-center rounded-3xl"
            onPress={onClickStart}
          >
            <Text className="text-[28px] text-white">START</Text>
          </TouchableOpacity>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default WelcomeScreen;
