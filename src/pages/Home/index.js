import React, {useState,useEffect} from 'react';
import { Keyboard} from 'react-native';

import { Container, Button, 
    ButtonText, Title, SubTitle, 
    Input, Spacer} from '../styles';

const Passenger = () => {    
    const [visible, setvisible] = useState(true); 

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
                <Title>Cadastre</Title>
                <SubTitle>Preencha os campos abaixo.</SubTitle>
            </Container>
            <Container justify="flex-start">
                <Spacer height={40} />
                <Input placeholder="Nome" />
                <Spacer height={20} />
                <Input placeholder="Curso" />
                <Spacer height={20} />
                <Input placeholder="email" />
                <Spacer height={20} />
            </Container>
            {visible && (
                <Container height={70} justify="flex-end">
                    <Button>
                        <ButtonText>Começar a usar</ButtonText>
                    </Button>
                </Container>
            )}
        </Container>
    );
}

export default Passenger;