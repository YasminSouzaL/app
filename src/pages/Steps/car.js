import React from 'react';
import { Image, Text } from 'react-native';

import { Container, Button, ButtonText, Title, SubTitle} from '../../styles';

const Car = () => {
    return(
        <Container padding={40} justify="flex-start">
            <Container align="flex-start" height={80} >
                <Title>Cadastre seu veículo</Title>
                <SubTitle>Preencha os campos abaixo.</SubTitle>
            </Container>
            <Container>

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