import React, {useState,useEffect} from 'react';
import { Keyboard} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { Container, Button, 
    ButtonText, Title, SubTitle, 
    Input, Spacer} from '../../styles';

import { auth,db } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
//import { setDoc, doc } from 'firebase/firestore';

const driver = () => {    
    const [visible, setvisible] = useState(true); 
    const [name, setName] = useState(''); 
    const [curso, setCurso] = useState('');

    const navigator = useNavigation();   

    const [driver, setDriver] = useState({
        passeger: auth.currentUser.uid,
        name: '',
        rg: '',
        telefone: '',
    })

    const newDriver = () => {
        addDoc(collection(db, "driver"), {
            driver: auth.currentUser.uid,
            name: driver.name,
            rg: driver.rg,
            telefone: diver.telefone,
        })
        .then(() => {
            console.log("Document successfully written!");
            navigator.navigate('Card');
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    useEffect(() => {
        /*const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) navigator.navigate('Home');
        });*/
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow', 
            () => setvisible(false),
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide', 
            () => setvisible(true),
        );
        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    },[]);


    
    return(
        <Container padding={40} justify="flex-start">
            <Container align="flex-start" height={80} >
                <Title>Cadastre</Title>
                <SubTitle>Preencha os campos abaixo.</SubTitle>
            </Container>
            <Container justify="flex-start">
                <Spacer height={20} />
                <Input 
                    placeholder="Nome" 
                    value={driver.name}
                    onChangeText={(itemValue) => setDriver({...driver, name: itemValue})}
                />
                <Spacer height={20} />
                <Input 
                    placeholder="RG" 
                    value={driver.rg}
                    onChangeText={(itemValue) => setDriver({...driver, rg: itemValue})}
                    
                />
                <Spacer height={20} />
                <Input 
                    placeholder="Telefone"
                    value={driver.telefone}
                    onChangeText={(itemValue) => setDriver({...driver, telefone: itemValue})}
                />
                <Spacer height={20} />
            </Container>
                <Container 
                    height={70} 
                    justify="flex-end"
                    align="flex-end"
                >
                    {visible && (
                        <Button 
                            onPress={() => newDriver()}
                        >
                            <ButtonText>Começar a usar</ButtonText>
                        </Button>
                    )}
                </Container>
        </Container>
    );
}

export default driver;
