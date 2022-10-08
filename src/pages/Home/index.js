import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Container, Avatar, Map, Title, SubTitle, Spacer, Input} from '../../styles';
//import GOOGLE_MAPS_APIKEY from '.env';

const Home = () => {

    const tipo = 'P';
    const tipo2 = 'M';

    return (
        <Container>
            <Map 
                initialRegion={{
                    latitude: -30.011364,
                    longitude: -51.16373
                }}
            />
            <Container
                position="absolute"
                justify="space-between"
                align="flex-start"
                padding={20}
                zIndex={999}
                pointerEvents="box-none"
                style={{height: '100%'}}
            >
                {/* Parte superior*/}
                <Container 
                    height={100} 
                    justify="flex-start"
                    align="flex-start">
                    {/*AVATAR*/}
                    <TouchableOpacity>
                        <Avatar source={{ uri: 'https://i.pinimg.com/originals/65/71/07/6571072297e92351469e0cc39ac1500b.png'}} />
                    </TouchableOpacity>
                </Container>
                <Container 
                    justify="flex-start" 
                    padding={30}
                    align="flex-start" 
                    elevation={50} 
                    height={150}
                    color="light"
                >
                    {/* PASSAGEIRO SEM CORRIDA */}
                    {tipo == "P" && (
                        <Container>
                            <SubTitle>Olá,MIMI</SubTitle>
                            <Title>Pra onde você quer ir?</Title>
                            <Spacer />
                            <Input placeholder="Procure um destino..."/> 
                        </Container>
                    )}
                    {/* MOTORISTA SEM CORRIDA */}   
                    {tipo == "M" &&( 
                        <Container>
                            <SubTitle>Olá,MIMI</SubTitle>
                            <Title>Nenhum corrida encontrada.</Title>    
                        </Container>
                    )}
                </Container>
            </Container>
        </Container>
    );
}
/* 
query={{
  //GOOGLE_MAPS_APIKEY
  key: GOOGLE_MAPS_APIKEY,
  language: 'pt-BR'
}}
*/
export default Home;