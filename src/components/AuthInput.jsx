import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import Icon from  'react-native-vector-icons/MaterialCommunityIcons';

export default props => {
    return (
        <View style={[styles.container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.icon} />
            <TextInput {...props} style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: '#333',
        marginLeft: 10
    },
    input: {
        marginLeft: 10,
        width: '70%'
    }
})