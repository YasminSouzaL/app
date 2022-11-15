import { useNavigation } from '@react-navigation/native';
import React, { useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { signOut } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import DateTimePicker from '@react-native-community/datetimepicker';
/* Usar a placa salva no banco*/

const HomeScreen = () => {
    const navigation = useNavigation();


    const [travel, setTravel] = React.useState({
        driverId: auth.currentUser.uid,
        datetime: new Date(),
        destination: '',
        origin: '',
        passengers: [],
    })

    const [showDate, setShowDate] = React.useState(false);
    const [showTime, setShowTime] = React.useState(false);

    const onChangeDate = (event, date) => {
        setShowDate(!showDate);
        setTravel({...travel, datetime: date});
    };
    
    const onChangeTime = (event, time) => {
        setShowTime(!showTime);
        setTravel({...travel, datetime: time});
    };    

    const newTravel = () => {
        addDoc(collection(db, 'travels'), travel)
        .then(() => {
            console.log('Document successfully written!');
            navigation.navigate('Card')
        })
        .catch((error) => {
            console.error('Error writing document: ', error);
        });
    }

    useEffect(() => {
        carPlate = auth.currentCars.plate;
    },[]);


    const handleSingOut = () => {
        signOut(auth).then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={styles.container}>
            <Text>Crie sua rota</Text>
            <Text>Email: {auth.currentUser?.email}</Text>
            <View>
                <Text style={styles.textContainer}>IF - Terminal durante a semana:</Text>                
            </View>
            <View style={styles.inputContainer}>
                <TouchableOpacity style={styles.button} onPress={setShowDate}>
                    <Text style={styles.buttonText}>Alterar a data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={setShowTime}>
                    <Text style={styles.buttonText}>Alterar o horário</Text>
                </TouchableOpacity>

                {showDate && (<DateTimePicker
                    testID="dateTimePicker"
                    value={travel.datetime}
                    mode='date'
                    is24Hour={true}
                    onChange={onChangeDate}
                />)}
                {showTime && (<DateTimePicker
                    testID="dateTimePicker"
                    value={travel.datetime}
                    mode='time'
                    is24Hour={true}
                    onChange={onChangeTime}
                />)}

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
                
                
            </View>
            {/*
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
            */}
            <Picker
                selectedValue={travel.carPlate}
                onValueChange={(itemValue, itemIndex) => setTravel({...travel, carPlate: itemValue})
            }>
                <Picker.Item label="Placa" value="Placa" />
                <Picker.Item label="Placa" value="Placa" />
                <Picker.Item label="Placa" value="Placa" />
                <Picker.Item label="Placa" value="Placa" />
            </Picker>

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