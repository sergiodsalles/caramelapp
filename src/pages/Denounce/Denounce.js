import React, { useState, useEffect } from 'react';
import { ScrollView, View, TextInput, Alert, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import { globalStyles } from '../../assets/global';
import Button from '../../components/Button/Button';
import { styles } from './denounceStyles';
import * as Location from 'expo-location';

import { firebase } from '../../api/auth/firebaseConfig';

const Denounce = ({navigation}) => {

    const [location, setLocation] = useState(null);
    const [initialRegion, setInitialRegion] = useState({});
    const { height, width } = Dimensions.get( 'window' );

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            setInitialRegion({
                latitude: location.coords.latitude, 
                longitude: location.coords.longitude, 
                latitudeDelta: 0.001,
                longitudeDelta: 0.001 * (width / height)
            });
        })();
    }, []);

    const initialState = {
        title: null,
        intro: null,
        description: null,
        userid: null,
        type: "Denúncia"
    }

    const [helpData, setHelpData] = useState(initialState);

    const handleSaveHelp = () => {
        const loggedUser = firebase.auth().currentUser;
        const helpsCollection = firebase.firestore().collection("helps");
        helpsCollection
            .doc()
            .set({...helpData, userid: loggedUser.uid})
            .then(()=>{
                Alert.alert("Sucesso", "Denúncia salva com sucesso.");
                navigation.navigate("Início");
            })
            .catch((error) => {
                Alert.alert("Erro ao salvar", error.message);
            })
    }

    return (
        <ScrollView style={styles.denounceContainer}>
            <MapView 
                initialRegion={initialRegion} 
                style={styles.map} >
                    {/* <Marker
                        coordinate={marker.latlng}
                        title={marker.title}
                        description={marker.description}
                    /> */}
            </MapView>
            
            <View style={styles.inputsContainer}>
                <TextInput onChangeText={value => setHelpData({...helpData, title: value})} style={globalStyles.input} placeholder="Título"/>
                <TextInput onChangeText={value => setHelpData({...helpData, intro: value})} multiline={true} textAlignVertical="top" numberOfLines={3} style={globalStyles.input} placeholder="Introdução"/>
                <TextInput onChangeText={value => setHelpData({...helpData, description: value})} multiline={true} textAlignVertical="top" numberOfLines={10} style={globalStyles.input} placeholder="Denúncia"/>

                <Button onPress={handleSaveHelp} label="Salvar" />
            </View>

        </ScrollView>
    )
}

export default Denounce;