import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../assets/style";


const ButtonSaveOrganization = ({title, onPress}) => {

    return (

    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
};


export default ButtonSaveOrganization;