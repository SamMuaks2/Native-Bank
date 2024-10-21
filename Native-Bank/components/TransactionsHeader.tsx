import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Colors from "@/constants/Colors";
import { ArrowDownIcon } from "@/constants/icons";
  
  const TransactionsHeader = () => {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.userInfoContainer}>
            <View style={styles.userTextWrapper}>
              <Text style={{ color: Colors.white, fontSize: 20, fontWeight: '700' }}>
                Transactions
              </Text>
            </View>
          </View>
  
          <TouchableOpacity onPress={() => {}} style={styles.btnWrapper}>
            <Text style={{color: Colors.tintColor}}>Download</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.wrapper}>
          <TouchableOpacity onPress={() => {}} style={styles.btnWrapperPro}>
            <Text style={{color: Colors.white}}>All Categories  </Text>
            <ArrowDownIcon width={20} height={20} />
          </TouchableOpacity>
            
          <TouchableOpacity onPress={() => {}} style={styles.btnWrapperPro}>
            <Text style={{color: Colors.white}}>All Status  </Text>
            <ArrowDownIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default TransactionsHeader;
  
  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      flex: 1,
      backgroundColor: Colors.grey,
    },
    wrapper: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 70,
      alignItems: "center",
      paddingHorizontal: 20,
      backgroundColor: Colors.grey,
    },
    userInfoContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    userTextWrapper: {
      marginLeft: 10,
    },
    boldText: {
      fontWeight: "700",
    },
    btnWrapper: {
      borderColor: Colors.white,
      borderWidth: 1,
      padding: 8,
      borderRadius: 10,
    },
    btnWrapperPro: {
        flexDirection: 'row',
      borderColor: Colors.white,
      borderWidth: 1,
      padding: 4,
      borderRadius: 10,
    },
    btnText: {
      color: Colors.white,
      fontSize: 12,
    },
  });
  