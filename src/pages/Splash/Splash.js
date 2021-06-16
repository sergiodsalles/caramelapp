import React from 'react'
import { Image, Text } from 'react-native'

import {SplashContainer, ButtonsContainer, LogoContainer, styles} from './splashStyles';

import Button from '../../components/Button/Button';

const Splash = ({navigation}) => {
    return (
        <SplashContainer>

            <LogoContainer>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
                <Text style={styles.subTitle}>Bem estar animal em sua cidade</Text>
            </LogoContainer>
            
            <ButtonsContainer>
                <Button onPress={()=> navigation.navigate('Cadastrar')} label="Cadastrar-se" />
                <Button onPress={()=> navigation.navigate('Entrar')} label="Entrar" variant="secondary" />
            </ButtonsContainer>
        </SplashContainer>
    )
}

export default Splash;