import { View, StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { TransactionsType } from "@/types";
import { Stack } from "expo-router";
import TransactionsHeader from "@/components/TransactionsHeader";

const Transactions = ({transactionsList} : {transactionsList: TransactionsType}) => {
   
  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <TransactionsHeader /> }} />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {transactionsList.map((item) => {
          return (
          <View style={styles.miniContainer} key={item.id}>
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 16, fontWeight: '600', color: Colors.black}}>{item.type}</Text>
              <Text style={{fontSize: 12, fontWeight: '300', color: Colors.grey}}>{item.date}</Text>
            </View>

            <Text>${item.amount}</Text>
          </View>
      )
    })}
    <Text style={styles.text}>Transactions is in building state</Text>
        </ScrollView>
      </View>
    </>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
  },
  miniContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.blue,
    marginTop: 12,
  },
  text: {
    color: Colors.white,
  },
});
