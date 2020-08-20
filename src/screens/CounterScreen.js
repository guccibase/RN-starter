import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return <View>
        <Text>CounterScreen</Text>
        <Button title="Increement" onPress={() => {
            setCounter(counter + 1)
        }} />
        <Button title="Decreement" onPress={() => {
            setCounter(counter - 1)

        }} />
        <Text>{counter}</Text>

    </View>
}

const style = StyleSheet.create({});


export default CounterScreen