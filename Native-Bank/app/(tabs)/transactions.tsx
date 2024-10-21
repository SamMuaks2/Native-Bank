import { View, StyleSheet, Text, FlatList } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { TransactionsType } from "@/types";
import { Stack } from "expo-router";
import TransactionsHeader from "@/components/TransactionsHeader";

const Transactions = ({transactionsList = [], loading = false, error = null} : { transactionsList: TransactionsType[]; loading?: boolean; error?: string | null; }) => {
   
  return (
    <>
      <Stack.Screen options={{ headerShown: true, header: () => <TransactionsHeader /> }} />
      <View style={styles.container}>
        {loading ? (
          <Text style={{ alignSelf: 'center', paddingVertical: 300, color: Colors.white }}>Loading...</Text>
        ) : error ? (
          <Text style={{ alignSelf: 'center', paddingVertical: 300, color: Colors.tintColor }}>{error}</Text>
        ) : (
          <FlatList
            data={transactionsList}
            keyExtractor={(item) => item.id.toString()} // Ensure id is unique
            renderItem={({ item }) => (
              <View style={styles.miniContainer}>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: Colors.black }}>{item.type}</Text>
                  <Text style={{ fontSize: 12, fontWeight: '300', color: Colors.grey }}>{item.date}</Text>
                </View>
                <Text style={styles.text}>${item.amount}</Text>
              </View>
            )}
          />
        )}
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
