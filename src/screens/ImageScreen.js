import React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score="2" />
            <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="22" />
            <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score="10" />
        </View>
    )
}

const style = StyleSheet.create({});


export default ImageScreen