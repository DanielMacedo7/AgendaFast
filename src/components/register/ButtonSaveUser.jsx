import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../assets/style";


const ButtonSaveUser = ({title, onPress}) => {

    return (

    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
};


export default ButtonSaveUser;