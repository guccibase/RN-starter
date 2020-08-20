import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

var name = 'Tahiru';

const ComponentsScreen = () => {

    return <View>
        <Text style={style.header}>Getting started with my first component!</Text>
        <Text style={style.name}>My name is {name}</Text>
    </View>
}

const style = StyleSheet.create({
    header: {
        fontSize: 45
    },
    name: {
        fontSize: 20
    }
})


export default ComponentsScreen