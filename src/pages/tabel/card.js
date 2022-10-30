import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,FlatList, TouchableOpacity } from "react-native";
import { auth, db } from '../../../firebase';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";

const Card = () =>{
    const [table, setTable] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const unsub = onSnapshot(doc(db, "travels"), (doc) => {
        console.log("Current data: ", doc.data(
            {driverId: auth.currentUser.uid}
        ));

    });
    useEffect(() => {
        auth.collection('travels').onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id})
            })
            setTable(list)
            setLoading(false)
        })    
    }, []) 

    return (
        <View style={styles.container}> 
            <Text>CardScreen</Text>
            <FlatList 
                data={table}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.item}>
                        <Text>{item.driverId}</Text>
                        <Text>{item.datetime}</Text>
                        <Text>{item.destination}</Text>
                        <Text>{item.origin}</Text>  
                        <Text>{item.carPlate}</Text>
                        <Text>{item.passengers}</Text>
                    </TouchableOpacity> 
                )}
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