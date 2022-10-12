import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore';

import { Button, ButtonText, Container } from '../../styles';

import logo from '../../../assets/logo.png';
import fundo from '../../../assets/fundo_tela.jpg';
import { auth, db } from '../../../firebase';

const Login = () => {
    const navigator = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDriver, setIsDriver] = React.useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) navigator.navigate('Tabel');
        });

        return unsubscribe;
    }, []);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                console.log("Logged in")
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    email: user.email,
                    isDriver: isDriver,
                })
                .then(() => {
                    console.log("Document successfully written!");
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <Container color="info50" justify="flex-end">
            <Container
               justify="space-around"
               padding={30}
               position="absolute"
               height={540}
               top={0}
               zIndex={9}>
                    <Image source={logo} />
                    <View style={styles.inputContainer}>
                        <TextInput 
                            placeholder='Email'
                            onChangeText={text => setEmail(text)}
                            value={email}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='Senha'
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry
                            style={styles.input}
                        />
                    </View>

                    <Button onPress={() => setIsDriver(!isDriver)}>
                        <ButtonText>Tipo de Usuário: {isDriver ? 'Motorista' : 'Passageiro'}</ButtonText>
                    </Button>

                    <Button onPress={handleLogin}>
                        <ButtonText>Entrar</ButtonText>
                    </Button>

                    <Button onPress={handleSignUp}>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>
            </Container>
            <Image source={fundo}/>
        </Container>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    label: {
        margin: 8,
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
});

export default Login;