import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const friend = [
    { name: 'name1', age: '1' },
    { name: 'name2', age: '11' },
    { name: 'name3', age: '12' },
    { name: 'name4', age: '13' },
    { name: 'name5', age: '14' },
    { name: 'name6', age: '11' },
    { name: 'name7', age: '123' },
    { name: 'name8', age: '13' },
    { name: 'name9', age: '14' },
    { name: 'name10', age: '11' },
    { name: 'name11', age: '21' },
    { name: 'name12', age: '31' },
    { name: 'name13', age: '41' },
    { name: 'name14', age: '51' },
]
const ListScreen = () => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
            data={friend}
            renderItem={({ item }) => {
                return <Text style={style.textStyle}>{item.name} - age {item.age}</Text>
            }}
        />

    )
}

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 30
    }
})


export default ListScreen