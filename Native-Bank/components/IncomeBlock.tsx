import { FlatList, ListRenderItemInfo, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { IncomeType } from "@/types";

const IncomeBlock = ({incomeList} : {incomeList: IncomeType}) => {
    function renderItem(info: ListRenderItemInfo<any>): ReactElement<any, string | JSXElementConstructor<any>> | null {
        throw new Error("Function not implemented.");
    }

    return (
        <View>
            <Text style={{color: Colors.white, fontSize: 16,}}>
                My <Text style={{fontWeight: '700'}}>Income</Text>
            </Text>

            <FlatList data={incomeList} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default IncomeBlock

const styles = StyleSheet.create({})