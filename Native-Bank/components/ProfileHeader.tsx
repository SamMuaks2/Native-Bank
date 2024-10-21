import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { SettingsIcon } from "@/constants/icons";

const ProfileHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoContainer}>
          <View style={styles.userTextWrapper}>
            <Text style={{ color: Colors.white, fontSize: 16 }}>
              Hi, <Text style={styles.boldText}>Shanty</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => {}} style={styles.btnWrapper}>
          <SettingsIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: Colors.tintColor,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.tintColor,
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
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  btnText: {
    color: Colors.white,
    fontSize: 12,
  },
});
