import { Alert, Modal, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ReceiptProps } from "../types/ReceiptProp";
import {format} from "date-fns"

interface ReceiptGeneratorScreenProps{
  navigation: any, 
  updateQueueInfo: (newQueueInfo: ReceiptProps ) => void

}

const ReceiptGeneratorScreen:React.FC<ReceiptGeneratorScreenProps> = ({navigation, updateQueueInfo}) => {

  const currentDate = format(new Date(), "MM/dd/yyyy").toString()
  const currentTime = format(new Date(), "hh:mm a").toString()

  const [transactionActiveButton, setTransactionActiveButton] = useState<
    string | null
  >(null);
  const [customerTypeActiveButton, setCustomerTypeActiveButton] = useState<
    string | null
  >(null);
  const [modalVisible, setModalVisible] = useState(false);

  function handleTransactionButton(transactionType: string | null) {
    if (transactionActiveButton === transactionType) {
      setTransactionActiveButton(null);
    } else {
      setTransactionActiveButton(transactionType);
    }
  }

  function handleCustomerTypeButton(customerType: string) {
    if (customerTypeActiveButton === customerType) {
      setCustomerTypeActiveButton(null);
    } else {
      setCustomerTypeActiveButton(customerType);
    }
  }
  function handleUpdateQueueInfo() {
    
    const customerQueueInfo: ReceiptProps = {
      transaction: transactionActiveButton,
      customerType: customerTypeActiveButton,
      queueNumber: "demo - W001",
      date: currentDate,
      time: currentTime,
      counter: "demo - counter 11",
    }
    updateQueueInfo(customerQueueInfo)
    
    navigation.navigate("ReceiptScreen")
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
        <View className="flex-1 justify-center items-center bg-none ">
          <View className="bg-stone-700 w-[18.75rem] h-[25rem]  p-[1.2rem] rounded-2xl">
            <Text className="text-[1.875rem] font-bold items-center  text-white">
              CONFIRMATION
            </Text>
            <Text className="text-[1.25rem] font-bold text-white">Transaction:</Text>
            <Text className="text-[1.25rem] pb-[0.625rem] text-white">
              {transactionActiveButton}
            </Text>
            <Text className="text-[1.25rem] font-bold text-white">Customer Type:</Text>
            <Text className="text-[1.25rem] text-white">{customerTypeActiveButton}</Text>

            <View className="flex-row gap-x-[4rem] mt-[9.375rem] justify-center">
              {["Back", "Continue"].map((confirmationButtons) => (
                <TouchableOpacity
                  key={confirmationButtons}
                  onPress={() => confirmationButtons ==="Back" ? setModalVisible(false) : handleUpdateQueueInfo() } 
                  className="w-[6rem] h-[3rem] bg-sky-100 justify-center items-center rounded-xl"
                >
                  <Text className="text-lg"> {confirmationButtons}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
        </View>
      </Modal>

      <View className="gap-y-3">
        <Text className="text-[2.1875rem] pb-2 text-center">Transactions</Text>

   
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
                onPress={() => {
                  handleTransactionButton(transaction);
                }}
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
                [{ text: "Okay, sabi mo eh "}], 
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
            } else {
              setModalVisible(true);
            }
          }}
        >
          <Text className="text-center text-[1.25rem] text-white">Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceiptGeneratorScreen;
