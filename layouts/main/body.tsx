import Message from '@/components/main/message/message';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = () => {
    const list = [1, 2, 33, 4, 5, 6]
    return (
        <View style={styles.frameBody}>
            {list.map((item, i) => <Message key={i} />)}
        </View>
    );
}

export default Body;

const styles = StyleSheet.create({
    frameBody: {
        width: '100%',
        height: 100,
    }
})
