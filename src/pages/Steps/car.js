import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import { setDoc, doc } from 'firebase/firestore';

import { Container, Button, 
    ButtonText, Title, SubTitle, 
    Input, Spacer} from '../../styles';

import {auth, db} from '../../../firebase';

const Car = () => {    
    const [visible, setvisible] = useState(true);

    const [car, setCar] = useState({
        driver: auth.currentUser.uid,
        model: '',
        color: '',
        plate: '',
        seats: '',
    })

    const handleNewCar = () => {
        setDoc(doc(db, "cars", car.plate), {
            driver: auth.currentUser.uid,
            model: car.model,
            color: car.color,
            seats: car.seats,
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    useEffect(() => {
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
                <Title>Cadastre seu veículo</Title>
                <SubTitle>Preencha os campos abaixo.</SubTitle>
            </Container>
            <Container justify="flex-start">
                <Spacer height={40} />
                <Input placeholder="Placa do veículo" />
                <Spacer height={20} />
                <Input placeholder="Marca do veículo" />
                <Spacer height={20} />
                <Input placeholder="Modelo do veículo" />
                <Spacer height={20} />
                <Input placeholder="Cor do veículo" />
                <Spacer height={20} />
                <Input placeholder="Quantidade de lugares" />
            </Container>
            {visible && (
                <Container height={70} justify="flex-end">
                    <Button
                        
                    >
                        <ButtonText>Começar a usar</ButtonText>
                    </Button>
                </Container>
            )}
        </Container>
    );
}

export default Car;