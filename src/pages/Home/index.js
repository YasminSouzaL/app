import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Container, Avatar, Map} from '../../styles';

const Home = () => {
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
                    align="flex-start"
                    color="info"
                >
                    {/*AVATAR*/}
                    <TouchableOpacity>
                        <Avatar source={{ uri: ''}} />
                    </TouchableOpacity>
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