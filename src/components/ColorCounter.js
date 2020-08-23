import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import ColorScreen from '../screens/ColorScreen';


const ColorCounter = ({ color, onDecrease, onIncrease }) => {

    return <View>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
}


const style = StyleSheet.create({

})

export default ColorCounter;