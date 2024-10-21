import { View, StyleSheet, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "@/constants/Colors";
import { TransactionsType } from "@/types";
import { Stack } from "expo-router";
import TransactionsHeader from "@/components/TransactionsHeader";
import transactionsData from "@/data/transactions.json";

const Transactions = ({
  loading = false,
  error = null,
}: {
  transactionsList: TransactionsType[];
  loading?: boolean;
  error?: string | null;
}) => {
  const [transactionsList, setTransactionsList] = useState<TransactionsType[]>(
    []
  );

  useEffect(() => {
    if (transactionsData && Array.isArray(transactionsData)) {
      setTransactionsList(transactionsData);
    }
  }, []);

  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, header: () => <TransactionsHeader /> }}
      />
      <View style={styles.container}>
        {loading ? (
          <Text
            style={{
              alignSelf: "center",
              paddingVertical: 300,
              color: Colors.white,
            }}
          >
            Loading...
          </Text>
        ) : error ? (
          <Text
            style={{
              alignSelf: "center",
              paddingVertical: 300,
              color: Colors.tintColor,
            }}
          >
            {error}
          </Text>
        ) : (
          <FlatList
            data={transactionsList}
            keyExtractor={(item) => item.id.toString()} // Ensure id is unique
            renderItem={({ item }) => (
              <View style={styles.miniContainer}>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 15,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      color: Colors.black,
                    }}
                  >
                    {item.type}
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "300",
                      color: Colors.grey,
                    }}
                  >
                    {item.date}
                  </Text>
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
    marginTop: 95,
    paddingTop: 55,
    paddingVertical: 8,
    justifyContent: "center",
    gap: 30,
    alignItems: "center",
    backgroundColor: Colors.blue,
  },
  miniContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 32,
    alignItems: "center",
    backgroundColor: Colors.blue,
    marginTop: 12,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    width: "90%",
  },
  text: {
    color: Colors.white,
  },
});
