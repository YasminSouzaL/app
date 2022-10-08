import React,{useState} from 'react';
import {Text,Image,StyleSheet,Checkbox, View,Input} from 'react-native';
import {Container} from '../../styles';

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
                    <Input>Email</Input>
                    <Input>Senha</Input>
                    <View style={styles.checkbox}>
                        <Checkbox
                            value={isSelected}
                            onValueChange={setSelection}
                            style={styles.checkboxContainer}
                        />
                        <Text style={styles.label}>Você é motorista</Text>   
                    </View>      
            </Container>
            <Image source={fundo}/>
        </Container>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        alignSelf: "center",
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    label: {
        margin: 8,
    },
});

export default Login;