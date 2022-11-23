import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../../components/NavOptions';
import NavFavourites from '../../components/NavFavourites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from "../../slices/navSlice";


const Ride = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 200,
                        height: 100,
                        resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://profomar.files.wordpress.com/2012/06/if.jpg",
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder="Where from?"
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(
                            setOrigin({                                  
                                location: details.geometry.location,
                                description: data.description,
                        
                            })
                        );
                        dispatch(setDestination(null));
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    minLength={2}
                    query={{
                        //GOOGLE_MAPS_APIKEY
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'pt-BR'
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                  <NavOptions />
                  <NavFavourites />

            </View>
        </SafeAreaView> 
    );
};
const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
});
export default Ride;

