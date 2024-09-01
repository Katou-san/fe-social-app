import { margin, padding } from '@/components/customs/styles';
import ItemTab from '@/components/header/navigation/itemTab';
import ItemStory from '@/components/header/story/itemStory';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';

const Listabs = () => {
    const list = ['Main', 'Group', 'Chanel', 'Contact', 5,]
    const [currnetIndex, set_currentIndex] = useState(0)
    return (
        <View style={styles.row}>
            <SafeAreaView style={{ flex: 4 }}>
                <ScrollView
                    horizontal={true}
                    scrollEventThrottle={16}
                    // pagingEnabled={true}
                    // showsHorizontalScrollIndicator={false}
                    snapToStart={true}
                >
                    {list.map((story, i) => (<ItemTab key={i} title={story + ''} index={i} currentIndex={currnetIndex} setIndex={(index: number) => set_currentIndex(index)} />))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        ...margin(10, 0),
        ...padding(20, 0, 0, 0)
    }
})

export default Listabs;
