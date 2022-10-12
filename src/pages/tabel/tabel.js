import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { auth } from '../../../firebase';

const HomeScreen = () => {
    const navigation = useNavigation()

    const handleSingOut = () => {
        auth
        .singOut()
        .then(() => {
            navigation.replace("Login")
        })
        .cath(error => alert(error.message))
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <View>
                <Text style={styles.textContainer}>IF - Terminal durante a semana:</Text>                
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                     placeholder='Horarios de entrada'
                     style={styles.input}
                />
                <TextInput
                     placeholder='Horarios de saida'
                     style={styles.input}
                />
            </View> 
            <TouchableOpacity
                onPress={handleSingOut}
                style={styles.button}
            > 
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#49efb5',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    inputContainer: {
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    },
    textContainer:{
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    }
})