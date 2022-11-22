import React from "react";
import { FlatList,StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/base";
import tw from "tailwind-react-native-classnames";

const data = [
    {
        id: "123",
        icon: "home",
        location: "Terminal",
        destination: "Avenida John Boyd Dunlop, Campinas, Brasil"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "IF",
        destination: "R. Heitor Lacerda Guedes, Campinas, Brasil",
    },
];

const NavFavourites = () => {
    return (
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-200`, {height: 0.5}]}/>
            )}
            renderItem={({item: {location, destination, icon}}) => (
                <TouchableOpacity style={tw`flex-row items-center p-5`}>
                    <Icon 
                        style={tw`mr-4 rounded-full bg-green-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="black"
                        size={18}
                    />
                    <View>
                        <Text style={tw`font-semibold text-lg`}>{location}</Text>
                        <Text style={tw`text-gray-300`}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default NavFavourites

const styles = StyleSheet.create({})