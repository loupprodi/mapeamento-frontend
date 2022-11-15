import React from "react";
import { View, Text , StyleSheet } from "react-native";



export const ListStructureData = (props) =>{
    return
    <View style={styles.listContainer}>
        <Text>Estrutura: </Text>
        <Text style={styles.textData}>{props.data.nome}</Text>
        <Text style={styles.textData}>{props.data.idade}</Text>
        {/* <Text style={styles.textData}>{props.data.nome}</Text>
        <Text style={styles.textData}>{props.data.nome}</Text>
        <Text style={styles.textData}>{props.data.nome}</Text> */}
    </View>
}

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor:'#3CB2CA',
        borderRadius:5,
        padding:25,
        margin:25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textData:{
        fontSize:16
    }
})