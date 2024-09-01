import { padding } from '@/components/customs/styles';
import IconCom from '@/components/IconComponent/iconCom';
import EyeIcon_Fig from '@/icons/figma/Eye';
import ShareIcon_Fig from '@/icons/figma/Share';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
type Props = {
    infoMess: any
}
const MessText = ({ infoMess }: Props) => {
    const listIcon = [1, 2, 3, 4, 5]
    return (
        <View style={styles.frameMessText}>
            <View style={styles.Avartar}>
                <Image
                    style={styles.Image}
                    source={require('@/assets/images/free-images.jpg')}
                    borderRadius={50}
                />
            </View>
            <View style={styles.fromContent} >
                <Text style={styles.NameTitle} >Name {infoMess}</Text>
                <Text style={styles.Content}>Content message {infoMess} </Text>
                <View style={styles.frameIcons}>
                    {listIcon.map((icon, i) => <IconCom key={i} active={i % 2 == 0} />)}

                </View>
                <View style={styles.Footer}>
                    <View style={styles.Eye}>
                        <EyeIcon_Fig w={20} color='#B0B0B0' />
                        <Text style={{ color: '#B0B0B0' }}>12</Text>
                    </View>
                    <Text style={styles.Time}>00:00</Text>
                </View>
            </View>
            <View style={styles.btnShare}>
                <ShareIcon_Fig />
            </View>
        </View>
    );
}

export default MessText;

const styles = StyleSheet.create({
    frameMessText: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    fromContent: {
        position: 'relative',
        maxWidth: '60%',
        minWidth: 150,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#484848',
        ...padding(10),
        borderRadius: 24,
        borderBottomLeftRadius: 15,
    },
    NameTitle: {
        color: '#0069FB',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Content: {
        marginTop: 2,
        fontSize: 16,
        color: '#fff'
    },
    frameIcons: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    Time: {
        marginTop: 2,
        textAlign: 'right',
        fontWeight: 'condensedBold',
        fontSize: 12,
        color: '#B0B0B0'
    },
    btnShare: {
        marginLeft: 5,
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#484848',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Avartar: {
        marginRight: 5,
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#484848',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Image: {
        width: 40,
        height: 40,
    },
    Footer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Eye: {
        flexDirection: 'row',
    }
})