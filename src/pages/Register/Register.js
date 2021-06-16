import React, {useState} from 'react'

import { firebase } from '../../api/auth/firebaseConfig';

import Input from '../../components/Input/Input';
import { RegisterContainer, styles, InputsContainer } from './registerStyles';
import { Alert, Switch, Text, View } from 'react-native'
import Button from '../../components/Button/Button';

const Register = ({navigation}) => {

    const initialUserState = {
        name: null,
        email: null,
        postalcode: null,
        address: null,
        mobile: null,
        password: null,
        confirm: null,
        receiveNotifications: true
    }
    const [userData, setUserData] = useState(initialUserState);

    const handleRegister = () => {
        
        if( userData.password !== userData.confirm ){
            Alert.alert("A senha não confere.");
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(userData.email, userData.password)
            .then((response) => {
                
                const {uid} = response.user;

                delete userData.password;
                delete userData.confirm;

                const usersCollection = firebase.firestore().collection("users");
                usersCollection
                    .doc(uid)
                    .set({...userData, id: uid})
                    .then(() => {
                        navigation.navigate("Início");
                    })
                    .catch((error) => {
                        Alert.alert("Erro", error.message);
                    });

            })
            .catch((error) => {
                Alert.alert("Erro", error.message);
            });
    }

    return (
        <RegisterContainer>

            <InputsContainer>
                
                <Input onChangeText={value => setUserData({...userData, name: value}) } placeholder="Nome" />
                <Input onChangeText={value => setUserData({...userData, email: value}) } autoCompleteType="email" placeholder="Email" />
                <Input onChangeText={value => setUserData({...userData, postalcode: value}) } keyboardType="number-pad" placeholder="CEP" />
                <Input onChangeText={value => setUserData({...userData, address: value}) } placeholder="Endereço" />
                <Input onChangeText={value => setUserData({...userData, mobile: value}) } keyboardType="phone-pad" placeholder="Celular" />
                <Input onChangeText={value => setUserData({...userData, password: value}) } secureTextEntry placeholder="Senha" />
                <Input onChangeText={value => setUserData({...userData, confirm: value}) } secureTextEntry placeholder="Cofirmar Senha" />

                <View style={styles.switchContainer}>
                    <Switch value={userData.receiveNotifications} onChange={ () => setUserData({...userData, receiveNotifications: !userData.receiveNotifications})} style={styles.switch} />
                    <View>
                        <Text style={styles.switchLabel}>Receber notificações de denuncias</Text>
                        <Text>nas proximidades</Text>
                    </View>
                </View>

            </InputsContainer>

            <Button onPress={handleRegister} label="Cadastrar" />
            
        </RegisterContainer>
    )
}

export default Register;