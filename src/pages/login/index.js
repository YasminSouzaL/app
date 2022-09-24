import React from 'react';
import {Text,Image} from 'react-native';
import {Container,Button,ButtonText} from '../../styles';

import logo from '../../../assets/logo.png';
import fundo from '../../../assets/fundo_tela.jpg'

const Login = () => {
    return (
        <Container color="info50" justify="flex-end">
            <Container
               justify="space-around"
               padding={60}
               position="absolute"
               height={300}
               top={0}
               zIndex={9}>
                <Image source={logo} />
                
                <Button type="info">
                    <ButtonText color="light">Fazer Login com Facebook</ButtonText>
                </Button>

                <Button type="light">
                    <ButtonText>Fazer Login com google</ButtonText>    
                </Button> 
            </Container>
            <Image source={fundo}/>
        </Container>
    );
}

export default Login;