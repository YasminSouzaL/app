import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity,Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import tw from "tailwind-react-native-classnames";
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
                <Image
                    style={{
                        width: 200,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://profomar.files.wordpress.com/2012/06/if.jpg",
                    }}
                />
                <Text style={styles.text}>Para onde você quer ir?</Text>

                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder="Para onde?"
                        style={styles.input}
                    />
                </View>
                <TouchableOpacity style={styles.button}>
                    <Button 
                        style={styles.buttonText} 
                        title="Procurar" 
                        onPress={() => navigation.navigate('Card')} 
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text 
                        
                        style={styles.buttonText}
                        onPress={() => navigation.navigate('Home')} 
                    >
                        Home
                    </Text>
                </TouchableOpacity>
                <Button title="Voltar" onPress={() => navigation.goBack()} />
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
        height: 55,
        margin: 33,
        borderWidth: 2
    },
    text:{
        fontSize: 22,
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
});
export default Way;