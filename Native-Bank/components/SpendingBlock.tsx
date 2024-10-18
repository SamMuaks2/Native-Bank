import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SpendingType } from "@/types";
import Colors from "@/constants/Colors";
import { Image } from 'react-native';
import { AirbnbIcon, AmazonIcon, DollarIcon, FigmaIcon, ShopingCartIcon, SpotifyIcon } from "@/constants/icons";

const NetflixIcon = require("@/assets/icons/netflix.png");

const SpendingBlock = ({spendingList} : {spendingList: SpendingType[]}) => {
    
    return (
        <View style={{marginVertical: 20, alignItems: 'flex-start'}}>
            <Text style={{color: Colors.white, fontSize: 16}}>July <Text style={{fontWeight: '700'}}>Spending</Text></Text>

            {spendingList.map((item) => {

let icon = <DollarIcon width={22} height={22} color={Colors.white} />
    

if (item.name == "AirBnB Rent") {
    icon = <AirbnbIcon width={22} height={22} color={Colors.white} />
} else if (item.name == "Netflix") {
    icon = <Image source={NetflixIcon} style={{width: 22, height: 22, color: Colors.white}} />
} else if (item.name == "Spotify") {
    icon = <SpotifyIcon width={22} height={22} color={Colors.white} />
} else if (item.name == "Amazon") {
    icon = <AmazonIcon width={22} height={22} color={Colors.white} />
} else if (item.name == "Figma") {
    icon = <FigmaIcon width={22} height={22} color={Colors.white} />
} else if (item.name == "Online Shopping") {
    icon = <ShopingCartIcon width={22} height={22} color={Colors.white} />
}

                return(
                    <View key={item.id} style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <View style={{backgroundColor: Colors.grey, padding: 15, borderRadius: 50, marginRight: 10}}>
                            {icon}
                        </View>
                        
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View style={{gap: 5}}>
                                <Text style={{color: Colors.white, fontSize: 16, fontWeight: '600'}}>{item.name}</Text>
                                <Text style={{color: Colors.white}}>{item.date}</Text>
                            </View>

                            <View style={{flexShrink: 1, alignItems: 'flex-end', marginLeft: 200}}>
                                <Text style={{color: Colors.white, fontSize: 16, fontWeight: '600'}}>${item.amount}</Text>
                            </View>

                        </View>
                    </View>
                );
            })}
        </View>
    )
}

export default SpendingBlock

const styles = StyleSheet.create({})