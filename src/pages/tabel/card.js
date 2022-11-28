import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,FlatList, TouchableOpacity } from "react-native";
import { db } from '../../../firebase';
import { collection, onSnapshot, query } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
/*Construir o filtro do card com o Way */
const Card = () =>{
    const navigation = useNavigation();
    const [table, setTable] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {  
        const q = query(collection(db, "travels"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const table = [];
            querySnapshot.forEach((doc) => {
                table.push({...doc.data(), id: doc.id});
            });
            setTable(table);
            setLoading(false);
        }, (error) => {
            setError(error);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []); 
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Way')}>
            <Text style={styles.title}>{item.destination}</Text>
            <Text style={styles.title}>{item.origin}</Text>
            <Text style={styles.title}>{item.date}</Text>
            <Text style={styles.title}>{item.hour}</Text>
            <Text style={styles.title}>{item.price}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}> 
            <Text>CardScreen</Text>
                <FlatList 
                    data={table}
                    renderItem={({item}) => (
                        <TouchableOpacity style={styles.card}>
                            <Text>-------------------</Text>
                            <Text style={styles.text}>Data e Hora da viagem</Text>
                            <Text style={styles.text}>
                                {item.datetime.toDate().getDate()}/
                                {item.datetime.toDate().getMonth()}/
                                {item.datetime.toDate().getFullYear()}
                                {" "}
                                {item.datetime.toDate().getHours()}:
                                {item.datetime.toDate().getMinutes()}
                            </Text>
                            <Text>-------------------</Text>
                            <Text></Text>
                            <Text style={styles.text}>Placa do Carro:{item.carPlate}</Text>
                            <Text style={styles.text}>Origem:{item.origin}</Text>
                            <Text style={styles.text}>Destino:{item.destination}</Text>
                            <Text></Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate('Home')}      
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconButton: {
        color: "#ffffff",
        fontSize: 40,
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        bottom: 30,
        left: 6,
        backgroundColor: "#49efb5",
        borderRadius: 50,
        alignItems: 'center',
        JustifyContent: 'center',
    },
    card: {
        width: 220,
        height: 180,
        backgroundColor: "#87e75f",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        borderWidth: 4,
    },
    text: {
        color: "#000000",
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
    }

})
export default Card;