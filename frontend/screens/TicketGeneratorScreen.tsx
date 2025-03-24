import {
  Alert,
  Modal,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { useState } from "react";

const TicketGeneratorScreen = ({ navigation }: any) => {
  const [transactionActiveButton, setTransactionActiveButton] = useState<
    string | null
  >(null);
  const [customerTypeActiveButton, setCustomerTypeActiveButton] = useState<
    string | null
  >(null);
  const [modalVisible, setModalVisible] = useState(false);

  function handleTransactionButton(transactionType: string) {
    setTransactionActiveButton(transactionType);
  }
  function handleCustomerTypeButton(customerType: string) {
    setCustomerTypeActiveButton(customerType);
  }

  return (
    <View className=" flex-1 p-4 mt-[40] bg-zinc-100  items-center gap-y-10">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* middle view  */}
        <View className="flex-1 justify-center items-center">
          {/* modal  */}
          {/* CONFIRMATION  */}
          <View className="bg-green-400 w-[300px] h-[400px] items-center p-4">
            <Text className="text-[30px] font-bold ">CONFIRMATION: </Text>
            <Text className="text-[20px] font-bold">Transaction: </Text>
            <Text className="text-[20px] pb-[10px]">
              {transactionActiveButton}{" "}
            </Text>
            <Text className="text-[20px] font-bold">Customer Type: </Text>
            <Text className="text-[20px]">{customerTypeActiveButton} </Text>

            <View className="flex-row gap-x-20 mt-[150px]">
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                className={`w-[100px] h-[50] justify-center  rounded-lg bg-red-500 `}
              >
                <Text className="text-center text-[20px] text-white">Back</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                className={`w-[100px] h-[50] justify-center rounded-lg bg-red-500`}
              >
                <Text className="text-center text-[20px] text-white">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* transactions */}
      <View className="gap-y-3">
        <Text className="text-[35px] pb-2 text-center">Transactions</Text>
        {/* transaction per row */}
        <View className="flex-row gap-x-3 ">
          <TouchableOpacity
            onPress={() => handleTransactionButton("Deposit")}
            className={`w-[130px] h-[70] justify-center ${
              transactionActiveButton == "Deposit"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setTransactionActiveButton("Withdrawal")}
            className={`w-[130px] h-[70] justify-center ${
              transactionActiveButton == "Withdrawal"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">
              Withdrawal
            </Text>
          </TouchableOpacity>
        </View>

        {/* transaction per row */}
        <View className="flex-row gap-x-3 ">
          <TouchableOpacity
            onPress={() => setTransactionActiveButton("Loan_Transaction")}
            className={`w-[130px] h-[70] justify-center ${
              transactionActiveButton == "Loan_Transaction"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">
              Loan Transaction
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setTransactionActiveButton("Fund_Transfer")}
            className={`w-[130px] h-[70] justify-center ${
              transactionActiveButton == "Fund_Transfer"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">
              Fund Transfer
            </Text>
          </TouchableOpacity>
        </View>

        {/* transaction per row */}
        <View className="flex-row gap-x-3 ">
          <TouchableOpacity
            onPress={() => setTransactionActiveButton("Open_Account")}
            className={`w-[130px] h-[70] justify-center ${
              transactionActiveButton == "Open_Account"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">
              Open Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleTransactionButton("Bill_Payment")}
            className={`w-[130px] h-[70] justify-center ${
              transactionActiveButton == "Bill_Payment"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">
              Bill Payment
            </Text>
          </TouchableOpacity>
        </View>

        {/* transaction per row */}
        <View className="flex-row gap-x-3  justify-center">
          <TouchableOpacity
            onPress={() => handleTransactionButton("Money_Exchange")}
            className={`w-[130px] h-[70] justify-center ${
              transactionActiveButton == "Money_Exchange"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">
              Money Exchange
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleTransactionButton("Others")}
            className={`w-[130px] h-[70] justify-center ${
              transactionActiveButton == "Others"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">Others</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* customer type */}
      <View>
        <Text className="text-[35px] pb-2 text-center">Customer Type</Text>
        <View className="flex-row gap-x-3 ">
          <TouchableOpacity
            onPress={() => handleCustomerTypeButton("Regular")}
            className={`w-[130px] h-[70] justify-center ${
              customerTypeActiveButton == "Regular"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">Regular</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleCustomerTypeButton("Priority")}
            className={`w-[130px] h-[70] justify-center ${
              customerTypeActiveButton == "Priority"
                ? " bg-red-800"
                : "bg-zinc-800"
            } `}
          >
            <Text className="text-center text-[20px] text-white">Priority</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* back and next */}

      <View className="flex-row gap-x-[60px]  justify-center pt-12 ">
        <TouchableOpacity
          className={`w-[130px] h-[60] justify-center bg-zinc-800 rounded-full`}
          onPress={() => navigation.navigate("MainSystemScreen")}
        >
          <Text className="text-center text-[20px] text-white">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`w-[130px] h-[60] justify-center bg-zinc-800 rounded-full`}
          onPress={() => transactionActiveButton == null || customerTypeActiveButton == null ? Alert.alert(""): setModalVisible(!modalVisible)}
        >
          <Text className="text-center text-[20px] text-white">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketGeneratorScreen;
