import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";


const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={style.menu}>
            <TouchableOpacity onPress={() => navigation.navigate('CryptoList')} style={style.button}>
                <Text style={style.buttontext}>Crypto</Text>

            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    menu: {
        flexDirection: 'row'
    },
    button: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        marginRight: 5,
        marginLeft: 5
    },
    buttontext: {
        fontFamily: 'Roboto'
    }
})

export default Menu;