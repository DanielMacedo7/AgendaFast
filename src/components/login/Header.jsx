import React from "react";
import { View, Text, Image } from "react-native";
import styles from "../../assets/style";

const Header = () => {

return (

      <View style={styles.header}>
        <Image source={require("../../assets/notebook.png")} style={styles.icon} />
        <Text style={styles.title}>Agenda Fast</Text>
      </View>
    
    ); 
};


export default Header;