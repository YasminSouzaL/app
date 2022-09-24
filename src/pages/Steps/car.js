import React, {useState} from 'react';
import { Keyboard} from 'react-native';

import { Container, Button, 
    ButtonText, Title, SubTitle, 
    Input, Spacer} from '../../styles';

const Car = () => {
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
            </Container>
            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText>Começar a usar</ButtonText>
                </Button>
            </Container>
        </Container>
    );
}

export default Car;