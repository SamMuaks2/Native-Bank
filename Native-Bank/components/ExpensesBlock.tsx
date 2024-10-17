import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";

const ExpenseBlock = ({expenseList} : {expenseList : ExpenseType[]}) => {
    const renderItem:ListRenderItem<Partial<ExpenseType>> = ({item,}) => {
        return(
            <View>
                <Text style={{color: Colors.white}}>{item.name}</Text>
            </View>
        );
    }

    return (
        <View>
            <FlatList data={expenseList} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
        </View>
    )
}

export default ExpenseBlock

const styles = StyleSheet.create({})