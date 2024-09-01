import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ItemStory = ({ type = 0, index = 0 }) => {
    return (
        <Image
            style={type == 0 ? { ...styles.image0, zIndex: -index } : styles.image1}
            source={require('@/assets/images/free-images.jpg')}
            borderRadius={50}
        />
    );
}

const styles = StyleSheet.create({
    image0: {
        width: 40,
        height: 40,
        marginLeft: -20,
        borderRadius: 50,
        cursor: 'pointer'
    },
    image1: {
        width: 50,
        height: 50,
        zIndex: 2,
        borderRadius: 50,
        cursor: 'pointer'
    }


})


export default ItemStory;
