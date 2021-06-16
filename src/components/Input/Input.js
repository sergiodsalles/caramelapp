import React from 'react'
import { TextInput } from 'react-native';
import { styles } from './inputStyles';

const Input = ({...otherProps}) => {

    return <TextInput style={styles.textInput} {...otherProps} />
}

export default Input;