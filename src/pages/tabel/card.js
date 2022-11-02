import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,FlatList, TouchableOpacity } from "react-native";
import { db } from '../../../firebase';
import { collection, onSnapshot, query } from "firebase/firestore";

const Card = () =>{
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
        
    return (
        <View style={styles.container}> 
            <Text>CardScreen</Text>
                <FlatList 
                    data={table}
                    renderItem={({item}) => (
                        <TouchableOpacity>
                            <Text>-------------------</Text>
                            <Text>Data e Hora da viagem</Text>
                            <Text>
                                {item.datetime.toDate().getDate()}/
                                {item.datetime.toDate().getMonth()}/
                                {item.datetime.toDate().getFullYear()}
                                {" "}
                                {item.datetime.toDate().getHours()}:
                                {item.datetime.toDate().getMinutes()}
                            </Text>
                            <Text>-------------------</Text>
                            <Text></Text>
                            <Text>Placa do Carro:{item.carPlate}</Text>
                            <Text>Origem:{item.origin}</Text>
                            <Text>Destino:{item.destination}</Text>
                            <Text></Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                />
            <TouchableOpacity style={styles.button}>
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
        left: 20,
        backgroundColor: "#49efb5",
        borderRadius: 50,
        alignItems: 'center',
        JustifyContent: 'center',
    },
})
export default Card;