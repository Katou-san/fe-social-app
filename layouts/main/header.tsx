import { padding } from '@/components/customs/styles';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Listabs from '@/components/header/navigation/listTabs';
import ListStory from '@/components/header/story/listStory';
import { MenuIcon_Fig } from '@/icons/figma/Menu';
import { SearchIcon_Fig } from '@/icons/figma/Search';
import { useLayout } from '@/contexts/providerLayout';

const Header = () => {
    const { set_Aside, stateAside } = useLayout()
    return (
        <View style={styles.frameHeader}>
            <View style={styles.contentHeader}>
                <View style={styles.frameMenu}>
                    <View style={{ cursor: 'pointer' }}>
                        <TouchableOpacity onPress={() => set_Aside(!stateAside)}>
                            <MenuIcon_Fig w={30} />
                        </TouchableOpacity>

                    </View>

                    <ListStory />
                </View>
                <View>
                    <SearchIcon_Fig w={30} />
                </View>
            </View>
            <View>
                <Listabs />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    frameHeader: {
        ...padding(10),
        width: '100%',
        backgroundColor: '#000',

    },
    frameMenu: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    contentHeader: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    frameNavigation: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    text: {
        color: '#fff'
    },
    coverImg: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
    },
});

export default Header;
