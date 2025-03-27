import React from "react";
import { Text } from "react-native";
import styles from "../../assets/style";


const AlertaSignUp = () => {

   return (

    <Text style={styles.alertaSignUp}>Caso ainda não possua cadastro.{' '}
        {'\n'}Por favor efetue-o em uma das funcionalidades abaixo!</Text>

   );
};

export default AlertaSignUp;