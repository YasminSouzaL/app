import React from "react";
import { View,Text, Button,StyleSheet, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";


const Home = () =>{
    const navigator = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <TouchableOpacity style={styles.button}>
                <Text 
                    style={styles.buttonText}
                    onPress={() => navigator.navigate('Login')}
                >
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text 
                    style={styles.buttonText}
                    onPress={() => navigator.navigate('Payment')}
                >
                    Registro do Passageiro!
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text 
                    style={styles.buttonText}
                    onPress={() => navigator.navigate('Car')}
                >
                    Register o seu carro!
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#49efb5',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: 200,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default Home;