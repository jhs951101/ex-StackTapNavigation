import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeMenu({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Text
                style={{ fontSize: 26, fontWeight: 'bold' }} >
                    Home Menu
            </Text>
            <Button title="Go to Other Screen" onPress={() => navigation.navigate('Other')} />
        </View>
    );
}