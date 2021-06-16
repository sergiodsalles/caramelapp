import React from 'react';

import { Text, TouchableOpacity } from "react-native"
import { styles } from "./buttonStyles";


const Button = ({label, variant, ...otherProps}) => {

    return (
        <TouchableOpacity style={[styles.button, variant === 'secondary' ? styles.buttonSecondary : styles.buttonPrimary]} {...otherProps}>
            <Text style={variant === 'secondary' ? styles.buttonLabelSecondary : styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button;