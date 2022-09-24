import React from 'react';
import { Image, Text } from 'react-native';

import { Container, Button, ButtonText, Title, SubTitle, PickerButton} from '../../styles';

import car from '../../../assets/car.jpg';
import hand from '../../../assets/harder.jpg';
const Type = () => {
    return(
        <Container padding={30} justify="flex-start">
            <Container align="flex-start" height={80} >
                <Title>Passageiro ou motorista?</Title>
                <SubTitle>Selecione qual será a sua função.</SubTitle>
            </Container>
            <Container>
                <PickerButton active>
                    <Image source={car} />
                    <Title>Motorista</Title>
                </PickerButton>
                <PickerButton>
                    <Image source={hand} />
                    <Title>Passageiros</Title>
                </PickerButton>
            </Container>
            <Container height={70} justify="flex-end">
                <Button>
                    <ButtonText>Próximo passo</ButtonText>
                </Button>
            </Container>
        </Container>
    );
}

export default Type;