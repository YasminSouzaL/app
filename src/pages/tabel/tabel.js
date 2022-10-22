import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { signOut } from 'firebase/auth';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import card from './card';
import { auth, db } from '../../../firebase';
import DT from '../../components/DateTimePicker';

const HomeScreen = () => {
    const navigation = useNavigation()
    
    const cars = [
        {plate: 'ABC-1234', model: 'Gol', color: 'Branco', seats: 4},
        {plate: 'ABC-1235', model: 'Celta', color: 'Preto', seats: 4},
    ]

    const [travel, setTravel] = React.useState({
        driverId: auth.currentUser.uid,
        datetime: new Date(1598051730000),
        destination: '',
        origin: '',
        carPlate: '',
        passengers: [],
    })

    const newTravel = () => {
        setDoc(doc(db, 'travels', travel.driverId), travel)
        .then(() => {
            console.log('Document successfully written!');
            navigation.navigate('card')
        })
        .catch((error) => {
            console.error('Error writing document: ', error);
        });
    }

    const handleSingOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <View>
                <Text style={styles.textContainer}>IF - Terminal durante a semana:</Text>                
            </View>
            <View style={styles.inputContainer}>
                <DT
                    datetime={travel.datetime}
                    changeDate={
                        (datetime) => setTravel({...travel, datetime: datetime})
                    }
                />
                <TextInput
                    style={styles.input}
                    placeholder="Datetime"
                    value={travel.datetime}
                    onChangeText={(datetime) => setTravel({...travel, datetime: new Date(datetime)})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Origem'
                    value={travel.origin}
                    onChangeText={origin => setTravel({...travel, origin})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Destino'
                    value={travel.destination}
                    onChangeText={text => setTravel({...travel, destination: text})}
                />
                
                <Picker
                    selectedValue={travel.carPlate}
                    onValueChange={(itemValue, itemIndex) => setTravel({...travel, carPlate: itemValue})
                }>
                    {
                        cars.map(car => (
                            <Picker.Item label={car.plate} value={car.plate} key={car.plate}/>
                        ))
                    }
                </Picker>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={newTravel}
            >
                <Text style={styles.textContainer}>Próximo</Text>
            </TouchableOpacity>
            
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