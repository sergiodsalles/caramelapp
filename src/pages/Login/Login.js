import React, {useState} from 'react'
import { Alert, Image } from 'react-native';

import { firebase } from '../../api/auth/firebaseConfig';

import Input from '../../components/Input/Input';
import { RegisterContainer, InputsContainer, styles } from './loginStyles';
import Button from '../../components/Button/Button';

const Login = ({navigation}) => {

    const initialState = {
        email: null,
        password: null,
    }

    const [loginInfo, setLoginInfo] = useState(initialState);

    const handleLogin = async () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
            .then((response) => {
                const {uid} = response.user;

                const usersCollection = firebase.firestore().collection('users');
                usersCollection
                    .doc(uid)
                    .get()
                    .then(userDoc => {
                        console.log(userDoc);
                        if(!userDoc.exists) {
                            Alert.alert("Erro", "Usuário ou senha inválidos.");
                            return;
                        }
                        const user = userDoc.data();
                        navigation.navigate("Início", { user });
                    })
                
            })
            .catch(() => {
                Alert.alert("Erro", "Usuário ou senha inválidos.");
            });
    }

    return (
        <RegisterContainer>

            <Image resizeMode="contain" style={styles.logo} source={require('../../assets/images/logo.png')} />

            <InputsContainer>
                
                <Input onChangeText={value => setLoginInfo({...loginInfo, email: value})} autoCompleteType="email" keyboardType="email-address" placeholder="Email" />
                <Input onChangeText={value => setLoginInfo({...loginInfo, password: value})} secureTextEntry placeholder="Senha" />

            </InputsContainer>

            <Button onPress={handleLogin} label="Entrar" />
            
        </RegisterContainer>
    )
}

export default Login;