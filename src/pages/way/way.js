import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity,Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import tw from "tailwind-react-native-classnames";
import logo from "../../../assets/logo.png";

/* 
    Fazer o passageiro fala para onde quer ir
    e depois filtrar os motoristas que vão para o mesmo lugar
*/
const Way = () =>{
    const navigation = useNavigation();
    const Destion = () =>{
        //navigation.navigate('Card');
    }
    return(
        <View style={styles.container}>
                <Image style={styles.image} source={logo} />
                <Text style={styles.text}>Para onde você quer ir?</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        
                    />
                </View>    
                <TouchableOpacity style={styles.button}>
                    <Text 
                        style={styles.buttonText}
                        onPress={() => navigation.navigate('Card')}
                    >
                        Procurar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text  
                        style={styles.buttonText}
                        onPress={() => navigation.navigate('Home')} 
                    >
                        Home
                    </Text>
                </TouchableOpacity>
                
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    inputContainer:{
        height: 80,
        width:  250,
        margin: 5,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 20,
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
    image: {
        width: 250,
        height: 100,
        marginBottom: 100,
    },
});
export default Way;