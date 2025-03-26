import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ReceiptProps } from "../types/ReceiptProp";

interface ReceiptScreenProps {
  queueInfo: ReceiptProps;
  navigation: any;
}

const ReceiptScreen: React.FC<ReceiptScreenProps> = ({ navigation, queueInfo }) => {
  return (
    <View className="flex-1 mt-[3rem] bg-zinc-100 p-6">
      <View className={`w-[80%] p-6 rounded-lg shadow-md items-center border border-gray-300 mt-[8rem] ml-[2rem] ${queueInfo.customerType ==="Priority"? "bg-blue-100 " : "bg-gray-100"} `}>
        <Text className="text-6xl font-bold tracking-widest text-gray-900">
          {queueInfo.queueNumber}
        </Text>

        <Text className="text-sm text-gray-600 mt-2">{queueInfo.date}</Text>
        <Text className="text-sm text-gray-600">{queueInfo.time}</Text>

        <View className="w-full border-dashed border-t border-gray-400 my-4" />

        <Text className="text-lg font-semibold text-gray-800">Transaction:</Text>
        <Text className="text-xl font-bold text-gray-700">{queueInfo.transaction}</Text>

        {/* Added Customer Type */}
        <Text className="text-lg font-semibold text-gray-800 mt-3">Customer Type:</Text>
        <Text className="text-xl font-bold text-gray-700">{queueInfo.customerType}</Text>

        <Text className="text-lg font-semibold text-gray-800 mt-3">Proceed to:</Text>
        <Text className="text-2xl font-bold text-blue-700">{queueInfo.counter}</Text>

        <Text className="mt-6 text-sm text-gray-500">Please wait for your turn.</Text>
      </View>

      <TouchableOpacity
        className="w-[8.125rem] h-[4.375rem] justify-center bg-zinc-800 mt-[8rem] ml-[13rem] rounded-xl"
        onPress={() => navigation.navigate("ReceiptGeneratorScreen")}
      >
        <Text className="text-center text-[1.25rem] text-white text-[1.4rem]">Print</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReceiptScreen;
