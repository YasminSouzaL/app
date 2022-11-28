import React,{useState} from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity,Image} from "react-native";
import tw from "tailwind-react-native-classnames";
import logo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import { collection, query, where, getDocs } from "firebase/firestore";

/* 
    Fazer o passageiro fala para onde quer ir
    e depois filtrar os motoristas que vão para o mesmo lugar
*/
const Way = () =>{
    const navigator = useNavigation();

    const [way, setWay] = useState({
        destination: '',
    })
    
    const handleWay = async () =>{
        // way.destination = way.destination.toLowerCase();
        const cards = [];

        navigator.navigate('Card', { destination: way.destination });
    }

    const [showDate, setShowDate] = React.useState(false);

    return(
        <View style={styles.container}>
                <Image style={styles.image} source={logo} />
                <Text style={styles.text}>Para onde você quer ir?</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite o destino"
                        value={way.destination}
                        onChangeText={text => setWay({...way, destination: text})}
                    />
                </View>    
                <TouchableOpacity style={styles.button}>
                    <Text 
                        style={styles.buttonText}
                        onPress={() => handleWay(
                            way.destination
                        )}
                    >
                        Procurar com Card
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text 
                        style={styles.buttonText}
                        onPress={() => navigator.navigate('Card')}
                    >
                        Procurar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text  
                        style={styles.buttonText}
                        onPress={() => navigator.navigate('Home')}
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
        height: 88,
        width:  255,
        margin: 6,
        
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