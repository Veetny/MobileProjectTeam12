import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from 'react-native-paper';
import style from "../styles/style";

export default function Customize() {
    const [checked, setChecked] = useState('first');

    return (
        <View style={style.KymmeniaPaddingeja}>
            <Text>Customize</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="first"
                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('first')}
                />
                <Text>Default</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="second"
                    status={ checked === 'second' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('second')}
                />
                <Text>Light mode</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <RadioButton
                    value="third"
                    status={ checked === 'third' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('third')}
                />
                <Text>Dark mode</Text>
            </View>
        </View>
    );
}