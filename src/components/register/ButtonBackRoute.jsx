import React from "react";
import { TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../../assets/style";
import { useRouter } from "expo-router";

const ButtonBackRoute = () => {

  const navigation = useRouter();

    return (

    <TouchableOpacity 
        style={styles.buttonBackRoute}
        onPress={() => navigation.back()}
        >
          <Icon name="arrow-back" size={24} color="#FFFFFF" />

        </TouchableOpacity>
    );
};


export default ButtonBackRoute;