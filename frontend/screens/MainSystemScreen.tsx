import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useState } from "react";

const MainSystemScreen = ({ navigation }: any) => {
  const [darkMode, setDarkMode] = useState(false);

  function onClickDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <View className="flex-1 p-4 mt-[40] bg-zinc-100 gap-y-[110] items-center ">
      <View className={`gap-y-8 pt-[40]`}>
        <TouchableOpacity
          className={"bg-zinc-800 w-[220px] h-[130] justify-center"}
          onPress={() => navigation.navigate("TicketGeneratorScreen")}
        >
          <Text className="text-center text-[30px] text-white">
            THIS IS NOT A TICKET GENERATOR FOR REPOSITORY PURPOSES!!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={"bg-zinc-800 w-[220px] h-[130] justify-center"}
          onPress={() => navigation.navigate("TellerScreen")}
        >
          <Text className="text-center text-[30px] text-white">TELLER</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={"bg-zinc-800 w-[220px] h-[130] justify-center"}
          onPress={()=> navigation.navigate("MonitorScreen")}
        >
          <Text className="text-center text-[30px] text-white">MONITOR</Text>
        </TouchableOpacity>
      </View>

      <View className="w-auto self-start flex-row gap ">
        <TouchableOpacity
          className={"w-[130px] h-[60] justify-center bg-zinc-800 rounded-full"}
          onPress={() => {
            navigation.navigate("WelcomeScreen");
          }}
        >
          <Text className="text-center text-[30px] text-white">BACK</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={"w-[130px] h-[60] justify-center bg-zinc-800 rounded-full ml-[70]"}
          onPress={() =>
            Alert.alert(
              "CAMERA",
              "May camera dapat to pero sakana wala pang oras ahhahah ",
              [{ text: "sige sabi mo eh" }, { text: "walang may pake" }]
            )
          }
        >
          <Text className="text-center text-[30px] text-white">RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainSystemScreen;
