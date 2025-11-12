import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain",
                    }}
                    source={{
                        uri: "https://links.papareact.com/gzs",
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder="Insira o local de partida"
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
                        key: GOOGLE_MAPS_APIKEY,
                        language: "pt-BR",
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                    predefinedPlaces={[
                        {
                            description: "Casa",
                            geometry: {
                                location: { lat: -23.55052, lng: -46.633308 },
                            },
                        },
                        {
                            description: "Trabalho",
                            geometry: {
                                location: { lat: -23.5629, lng: -46.6544 },
                            },
                        },
                    ]}
                    textInputProps={{
                        onFocus: () => {},
                        onBlur: () => {},
                        onChangeText: () => {},
                        value: "",
                        placeholderTextColor: "#999",
                    }}
                />

                <NavOptions />
                <NavFavorites />
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
