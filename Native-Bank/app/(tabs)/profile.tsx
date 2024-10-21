import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import ProfileHeader from "@/components/ProfileHeader";

const Profile = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, header: () => <ProfileHeader /> }}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerWrapper}>
            <View>
              place icons
              <Text style={styles.text}>Transaction History</Text>
              <TouchableOpacity onPress={() => {}}>
                <Text></Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.black,
    color: Colors.white
  },
  innerWrapper: {
    flexDirection: "column",
    paddingVertical: 8,
  },
  text: {
    color: Colors.white,
  },
});
