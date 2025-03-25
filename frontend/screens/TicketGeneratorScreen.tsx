import { Alert, Modal, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const TicketGeneratorScreen = ({ navigation }: any) => {
  const [transactionActiveButton, setTransactionActiveButton] = useState<
    string | null
  >(null);
  const [customerTypeActiveButton, setCustomerTypeActiveButton] = useState<
    string | null
  >(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(false)

  function handleTransactionButton(transactionType: string | null) {
    if(transactionActiveButton === transactionType){
      setTransactionActiveButton(null)
    }else{
      setTransactionActiveButton(transactionType)
    }
  }

  function handleCustomerTypeButton(customerType: string) {
    if(customerTypeActiveButton === customerType){
      setCustomerTypeActiveButton(null)
    }else{
      setCustomerTypeActiveButton(customerType)
    }
  }

  return (
    <View className="flex-1 p-4 bg-zinc-100 items-center gap-y-10 mt-[3rem]">
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(true);
        }}
      >
        {/* popup container part */}
        <View className="flex-1 justify-center items-center">
          <View className="bg-green-400 w-[18.75rem] h-[25rem] items-center p-[1.2rem] rounded-lg">
            <Text className="text-[1.875rem] font-bold">CONFIRMATION:</Text>
            <Text className="text-[1.25rem] font-bold">Transaction:</Text>
            <Text className="text-[1.25rem] pb-[0.625rem]">
              {transactionActiveButton}
            </Text>
            <Text className="text-[1.25rem] font-bold">Customer Type:</Text>
            <Text className="text-[1.25rem]">{customerTypeActiveButton}</Text>

            <View className="flex-row gap-x-[6.25rem] mt-[9.375rem]">
              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                className="w-[6.25rem] h-[3.125rem] justify-center rounded-lg bg-red-500"
              >
                <Text className="text-center text-[1.25rem] text-white">
                  Back
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                className="w-[6.25rem] h-[3.125rem] justify-center rounded-lg bg-red-500"
              >
                <Text className="text-center text-[1.25rem] text-white">
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Transactions */}
      <View className="gap-y-3">
        <Text className="text-[2.1875rem] pb-2 text-center">Transactions</Text>

        {/* Transaction Rows */}
        {[
          ["Deposit", "Withdrawal"],
          ["Loan_Transaction", "Fund_Transfer"],
          ["Open_Account", "Bill_Payment"],
          ["Money_Exchange", "Others"],
        ].map((row, index) => (
          <View key={index} className="flex-row gap-x-3 justify-center">
            {row.map((transaction) => (
              <TouchableOpacity
                key={transaction}
                onPress={() =>{handleTransactionButton(transaction)}}
                className={`w-[8.125rem] h-[4.375rem] justify-center ${
                  transactionActiveButton === transaction
                    ? "bg-red-800"
                    : "bg-zinc-800"
                }`}
              >
                <Text className="text-center text-[1.25rem] text-white">
                  {transaction.replace("_", " ")}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Customer Type */}
      <View>
        <Text className="text-[2.1875rem] pb-2 text-center">Customer Type</Text>
        <View className="flex-row gap-x-3">
          {["Regular", "Priority"].map((type) => (
            <TouchableOpacity
              key={type}
              onPress={() => handleCustomerTypeButton(type)}
              className={`w-[8.125rem] h-[4.375rem] justify-center ${
                customerTypeActiveButton === type ? "bg-red-800" : "bg-zinc-800"
              }`}
            >
              <Text className="text-center text-[1.25rem] text-white">
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Back & Next Buttons */}
      <View className="flex-row gap-x-[3.75rem] justify-center pt-12">
        <TouchableOpacity
          className="w-[8.125rem] h-[3.75rem] justify-center bg-zinc-800 rounded-full"
          onPress={() => navigation.navigate("MainSystemScreen")}
        >
          <Text className="text-center text-[1.25rem] text-white">Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="w-[8.125rem] h-[3.75rem] justify-center bg-zinc-800 rounded-full"
          onPress={() => {
            if (
              transactionActiveButton == null &&
              customerTypeActiveButton == null
            ) {
              Alert.alert(
                "Invalid",
                "Please choose a Transaction and what Customer Type.",
                [{ text: "Okay, sabi mo eh " }]
              );
              return;
            }
            if (
              transactionActiveButton == null ||
              customerTypeActiveButton == null
            ) {
              Alert.alert(
                "Invalid",
                `Please choose a ${
                  transactionActiveButton == null
                    ? "Transaction"
                    : "Customer Type"
                }`
              );
              return;
            }
            else{
             setModalVisible(true)
            }
          }}
        >
          <Text className="text-center text-[1.25rem] text-white">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TicketGeneratorScreen;
