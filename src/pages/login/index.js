import React,{useState} from 'react';
import {Text,Image,StyleSheet,Checkbox} from 'react-native';
import {Container,Input} from '../../styles';

import logo from '../../../assets/logo.png';
import fundo from '../../../assets/fundo_tela.jpg'

const Login = () => {
    const [isSelected, setSelection] = useState(false);

    return (
        <Container color="info50" justify="flex-end">
            <Container
               justify="space-around"
               padding={30}
               position="absolute"
               height={400}
               top={0}
               zIndex={9}>
                <Image source={logo} />
                    <Input color="light">Email</Input>
                    <Input color="info">Senha</Input>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkboxContainer}
                    />   
            </Container>
            <Image source={fundo}/>
        </Container>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    }

});

export default Login;