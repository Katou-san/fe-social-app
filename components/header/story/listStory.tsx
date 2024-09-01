import ItemStory from '@/components/header/story/itemStory';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListStory = () => {
    const list = [1, 2, 3, 4, 5,]
    return (
        <View style={styles.row}>
            {list.map((story, i) => (<ItemStory key={i} type={i == 0 ? 1 : 0} index={i} />))}
            <Text style={styles.text}>Stories</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20,
    },
    text: {
        color: 'white',
        fontSize: 15,
        marginLeft: 10,
        fontWeight: '900'
    }
})

export default ListStory;
