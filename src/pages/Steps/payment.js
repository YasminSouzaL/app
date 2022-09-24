import React,{useEffect,useState} from 'react';
import { Keyboard } from 'react-native';
import { CreditCardInput} from "react-native-credit-card-input";

import { Container, Button, ButtonText,
     Title, SubTitle, Spacer,} from '../../styles';


const Payment = () => {
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
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={80} >
                <Title>Escolha como pagar?</Title>
                <SubTitle>Preencha os dados do cartão de crédito.</SubTitle>
            </Container>
            <Container>
                <Spacer height={50} />
                <CreditCardInput requiresName />
            </Container>
            {visible && (
                <Container height={70} justify="flex-end">
                    <Button>
                        <ButtonText>Comece a usar</ButtonText>
                    </Button>
                </Container>
            )}
        </Container>
    );
}

export default Payment;