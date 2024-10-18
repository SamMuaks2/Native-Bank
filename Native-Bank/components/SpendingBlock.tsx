import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import { Image } from "react-native";
import {
  AirbnbIcon,
  AmazonIcon,
  DollarIcon,
  FigmaIcon,
  ShopingCartIcon,
  SpotifyIcon,
} from "@/constants/icons";

const NetflixIcon = require("@/assets/icons/netflix.png");

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  return (
    <View style={styles.spendingBlock}>
      <Text style={styles.mainText}>
        July <Text style={styles.spending}>Spending</Text>
      </Text>

      {spendingList.map((item) => {
        let icon = <DollarIcon style={styles.spendingIcon} />;

        if (item.name == "AirBnB Rent") {
          icon = <AirbnbIcon style={styles.spendingIcon} />;
        } else if (item.name == "Netflix") {
          icon = <Image source={NetflixIcon} style={styles.spendingIcon} />;
        } else if (item.name == "Spotify") {
          icon = <SpotifyIcon style={styles.spendingIcon} />;
        } else if (item.name == "Amazon") {
          icon = <AmazonIcon style={styles.spendingIcon} />;
        } else if (item.name == "Figma") {
          icon = <FigmaIcon style={styles.spendingIcon} />;
        } else if (item.name == "Online Shopping") {
          icon = <ShopingCartIcon style={styles.spendingIcon} />;
        }

        return (
          <View key={item.id} style={styles.spendingWrapper}>
            <View style={styles.iconWrapper}>{icon}</View>

            <View style={styles.spendingSubWrapper}>
              <View style={{ gap: 5 }}>
                <Text style={styles.spendingItemName}>{item.name}</Text>
                <Text style={styles.spendingItemDate}>{item.date}</Text>
              </View>

              <Text style={styles.spendingItemAmount}>${item.amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({
  spendingBlock: {
    marginVertical: 20,
    alignItems: "flex-start",
  },
  mainText: {
    color: Colors.white,
    fontSize: 16,
    marginBottom: 20,
  },
  spending: {
    fontWeight: "700",
  },
  spendingIcon: {
    width: 22,
    height: 22,
    color: Colors.white,
  },
  spendingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  iconWrapper: {
    backgroundColor: Colors.grey,
    padding: 15,
    borderRadius: 50,
    marginRight: 10,
  },
  spendingSubWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  spendingItemName: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  spendingItemDate: { color: Colors.white },
  spendingItemAmount: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
});
