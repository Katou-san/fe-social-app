import IconCom from '@/components/IconComponent/iconCom';
import { IconsKey } from '@/configs/icon.config';
import { getList_IconType, IconModel, IconType } from '@/model/icon.model';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const FrameIconInMess = () => {
    const ListIcon = IconModel.init_List
    return (
        <View style={styles.frameIcons}>
            {ListIcon.map((icon, i) => {
                if (icon.length > 0) {
                    return <IconCom key={i} icon={IconsKey[icon.Key]} />
                }
            })}
        </View>
    );
}

export default FrameIconInMess;
const styles = StyleSheet.create({
    frameIcons: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})