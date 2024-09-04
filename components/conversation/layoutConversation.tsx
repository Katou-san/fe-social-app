import { margin, padding } from '@/components/customs/styles';
import MessText from '@/components/message/MessText';
import React from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

const LayoutConversation = () => {
    const Listmess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={[styles.frameScrollview]}>
                {Listmess.map((mess, i) => <MessText key={i} infoMess={mess} currentUser={i} />)}
            </ScrollView>
        </SafeAreaView>
    );
}

export default LayoutConversation;

const styles = StyleSheet.create({
    container: {
        overflow: 'scroll'
    },
    frameScrollview: {
        flex: 1,
        ...margin(65, 0, 50),
        ...padding(0, 5, 100),
        flexDirection: 'column',
        overflow: 'scroll'
    }
})