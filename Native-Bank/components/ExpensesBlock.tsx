import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";

const ExpenseBlock = ({expenseList} : {expenseList : ExpenseType[]}) => {
    const renderItem:ListRenderItem<Partial<ExpenseType>> = ({item, index}) => {
        if(index == 0) {
            return(
                <TouchableOpacity onPress={() => {}}>
                    <View style={styles.addItemBtn}>
                        <Feather name="plus" size={22} color={'#ccc'} />
                        <Text style={{color: Colors.white}}>Add Item</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        let amount = item.amount.split('.');
        return(
            <View style={[styles.expenseBlock, {backgroundColor: item.name == 'Food' ? Colors.blue : item.name == 'Saving' ? Colors.white : item.name == 'Dressing' ? Colors.grey : item.name == 'Maintenance' ? Colors.blue : Colors.tintColor}]}>
                <Text style={[styles.expenseBlockTxt2, {color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : item.name == 'Maintenance' ? Colors.black : Colors.white}]}>{item.name}</Text>
                <Text style={[styles.expenseBlockTxt1, {color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : item.name == 'Maintenance' ? Colors.black : Colors.white}]}>${amount[0]}.<Text style={styles.expensesBlockTxt2Span}>{amount[1]}</Text></Text>
                
                <View style={styles.expenseBlock3}>
                    <Text style={[styles.expenseBlockTxt2, {color: item.name == 'Food' ? Colors.black : item.name == 'Saving' ? Colors.black : item.name == 'Maintenance' ? Colors.black : Colors.white}]}>{item.percentage}%</Text>
                </View>
            </View>
        );
    }

    const staticPosition = [{name: "Add Item"}];

    return (
        <View style={{paddingVertical: 20,}}>
            <FlatList data={staticPosition.concat(expenseList)} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
        </View>
    )
}

export default ExpenseBlock

const styles = StyleSheet.create({
    addItemBtn: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#666',
        borderStyle: 'dashed',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 10,
    },
    expenseBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.tintColor,
        width: 120,
        padding: 15,
        borderRadius: 15,
        marginRight: 20,
        gap: 8,
    },
    expenseBlockTxt1:{
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    expenseBlockTxt2:{
        color: Colors.white,
        fontSize: 14,
    },
    expensesBlockTxt2Span: {
        fontSize: 12,
        fontWeight: '400'
    },
    expenseBlock3: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10,
    }
})