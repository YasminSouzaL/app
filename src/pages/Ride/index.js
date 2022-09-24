import React, {useState,useEffect} from 'react';
import { Keyboard} from 'react-native';

import { Container, Button, 
    ButtonText, Title, SubTitle, 
    Input, AddressList,AddressItem} from '../../styles';

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

            <Container padding={30} justify="flex-start">
                <Container height={90} justify="flex-start">
                    <Input placeholder="Embarque" />
                    <Input placeholder="Destino" />
                </Container>
                <Container>
                    <AddressList 
                        data={[1,2,3,4,5,6,7,8,9,10,11,12]}
                        renderItem={({item, index}) => ( 
                            <AddressItem>
                                <SubTitle bold>IF Campinas</SubTitle>
                                <SubTitle small>R.Heitor Lacerda Guedes,1000</SubTitle>
                            </AddressItem>
                        )} 
                    />
                </Container>
            </Container>
            {visible && (
                <Container height={70} padding={30} justify="flex-end">
                    <Button>
                        <ButtonText> Comece a usuar </ButtonText>
                    </Button>
                </Container>
            )}
        </>    
    );
}

export default Ride;