import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { IncomeType } from "@/types";
import { DollarIcon } from "@/constants/icons";
import { Feather } from "@expo/vector-icons";
import amount from "../data/income.json";

const IncomeBlock = ({incomeList} : {incomeList: IncomeType[]}) => {
    const renderItem:ListRenderItem<IncomeType> = ({item, index}) => {
        let [integerPart, decimalPart] = item.amount.split('.');
        return(
            <View style={{backgroundColor: Colors.grey, padding: 20, borderRadius: 20, marginRight: 15, width: 150, gap: 10,}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <View style= {{borderColor: '#666', borderWidth: 1, borderRadius: 50, padding: 5, alignSelf: 'flex-start',}}>
                <DollarIcon width={22} height={22} color={Colors.white} />
                </View>

                <TouchableOpacity onPress={() => {}}>
                    <Feather name="more-horizontal" size={20} color={Colors.white} />
                </TouchableOpacity>
                </View>
                <Text style={{color: Colors.white}}>{item.name}</Text>
                <Text style={{color: Colors.white, fontSize: 18, fontWeight: "600",}}>${integerPart}{decimalPart ? (
                    <Text style={{fontSize:14, fontWeight: '400'}}>.{decimalPart}</Text>
                ) : null}
                </Text>
            </View>
        );
    }

    return (
        <View>
            <Text style={{color: Colors.white, fontSize: 16, marginBottom: 20,}}>
                My <Text style={{fontWeight: '700'}}>Income</Text>
            </Text>

            <FlatList data={incomeList} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default IncomeBlock

const styles = StyleSheet.create({})