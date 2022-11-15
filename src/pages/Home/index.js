import React from "react";
import { View,Text, Button,StyleSheet, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

import logo from "../../../assets/logo.png";
/*Fazer um home com Icons */
const Home = () =>{
    const navigator = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={logo} />
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
            <TouchableOpacity style={styles.button}>
                <Text 
                    style={styles.buttonText}
                    onPress={() => navigator.navigate('Tabel')}
                >
                    Registro do Motorista!
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
        paddingBottom: 20,
    },
    image: {
        width: 250,
        height: 100,
        marginBottom: 100,
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
    },
    TituloText: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default Home;