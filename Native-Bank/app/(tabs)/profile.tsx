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
import { AlertIcon, CardIcon, ClipboardIcon, GreaterThanIcon, HeadsetIcon, LimitIcon, PhoneIcon, ShieldIcon, StarIcon, UserIcon } from "@/constants/icons";

const Profile = () => {
  return (
    <>
      <Stack.Screen
        options={{ headerShown: true, header: () => <ProfileHeader /> }}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerWrapper}>
            <View style={styles.miniContainer}>
              <UserIcon width={20} height={20} />
              <Text style={styles.text}>KYC Status</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
              </TouchableOpacity>
            </View>
            <View style={styles.miniContainer}>
              <ClipboardIcon width={20} height={20} />
              <Text style={styles.text}>Transaction History</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.miniContainer}>
              <LimitIcon width={20} height={20} />
              <Text style={styles.text}>Account Limits</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.miniContainer}>
              <CardIcon width={20} height={20} />
              <Text style={styles.text}>Cards/Accounts</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
              </TouchableOpacity>
            </View>
          </View>


          <View style={styles.innerWrapper}>
            <View style={styles.miniContainer}>
              <ShieldIcon width={20} height={20} />
              <Text style={styles.text}>Security Center</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.miniContainer}>
              <PhoneIcon width={20} height={20} />
              <Text style={styles.text}>USSD</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.miniContainer}>
              <AlertIcon width={20} height={20} />
              <Text style={styles.text}>Alert Preferences</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.miniContainer}>
              <HeadsetIcon width={20} height={20} />
              <Text style={styles.text}>Customer Service Center</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
              </TouchableOpacity>
            </View>

            <View style={styles.miniContainer}>
              <StarIcon width={20} height={20} />
              <Text style={styles.text}>Rate Us</Text>
              <TouchableOpacity onPress={() => {}} style={styles.touchableOpacity}>
                <GreaterThanIcon width={20} height={20} />
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
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: Colors.grey,
    borderColor: Colors.grey,
    borderWidth: 3,
    padding: 8,
    borderRadius: 10,
  },
  miniContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.black,
    marginBottom: 8,
    gap: 8,
    alignItems: 'center',
    borderColor: Colors.blue,
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  },
  text: {
    color: Colors.white,
    fontSize: 16,
  },
  touchableOpacity: {
    borderColor: "#666",
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
  }
});
