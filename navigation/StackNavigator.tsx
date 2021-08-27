import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';

export default function App() {

    return (
        <View style={{ flex: 1, backgroundColor: 'white', }}>
            <Text>Login foi um sucesso</Text>

            <TouchableOpacity onPress={() => firebase.auth().signOut()}>
                <Text style={{color: 'blue', }}>Sair da Conta</Text>
            </TouchableOpacity>
        </View>
    )
}