import React, {useState,useEffect} from 'react';
import { Keyboard} from 'react-native';

import { Container, Button, 
    ButtonText, Title, SubTitle, 
    Input, Spacer} from '../../styles';

const Ride = () => {    
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
        <>
            <Container row height={50} justify="flex-start">
                <Container align="flex-start" padding={20}>
                    <SubTitle>Voltar</SubTitle>
                </Container>
                <Container>
                    <Title>Corrida</Title> 
                </Container>
                <Container align="flex-end" padding={20}></Container>
            </Container>
            <Container padding={30}>
                <Container height={90} justify="flex-start">
                    <Input placeholder="Embarque" />
                    <Input placeholder="Destino" />
                </Container>
            </Container>
            <Container></Container>
            {visible && (
                <Container height={70} justify="flex-end">
                    <Button>
                        <ButtonText> Comece a usuar </ButtonText>
                    </Button>
                </Container>
            )}
        </>    
    );
}

export default Ride;