import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../../assets/style";
import { useRouter } from "expo-router";

const FooterButtons = () => {

  const navigation = useRouter();

    return (

    <View style={styles.footerButtons}>
        
        <TouchableOpacity 
        style={styles.footerButton}
        onPress={() => navigation.push("/registerUser")}
        >
          <Icon name="done" size={24} color="#FFFFFF" />
          <Text style={styles.footerButtonText}>Cadastrar</Text>

        </TouchableOpacity>
      
    </View>



    );
};


export default FooterButtons;