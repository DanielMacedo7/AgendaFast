import React from "react";
import { Text } from "react-native";
import styles from "../../assets/style";


const AlertaSignUp = () => {

   return (

    <Text style={styles.alertaSignUp}>Caso ainda não possua cadastro.{' '}
        {'\n'}Por favor clique no botão abaixo!</Text>

   );
};

export default AlertaSignUp;