import React from "react";
import { TextInput} from "react-native";
import styles from "../../assets/style";

//quando eu for retornar mais de um input eu preciso coloca-los dentro de um fragment para que o DOM não possa se perder no momento da chamada.
const InputField = ({ placeholder, value, onChangeText, secureTextEntry = false}) => {

    return (

      <TextInput
      
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#666"
          value={value}
          onChangeText={onChangeText} 
          secureTextEntry={secureTextEntry}

       />

    ); 

};

export default InputField;