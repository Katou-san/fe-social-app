import React from 'react';
import { Image, View } from 'react-native';
type Props = {
    nameFile: string
}
const ItemCircel = ({ nameFile }: Props) => {
    return (
        <View>
            {/* <Image source={require(`@/assets/svg/X.svg`)} width={50} height={50} borderRadius={50} /> */}
        </View>
    );
}

export default ItemCircel;
