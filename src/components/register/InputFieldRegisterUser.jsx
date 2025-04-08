import React from "react";
import { TextInput} from "react-native";
import styles from "../../assets/style";


const InputFieldRegisterUser = ({ placeholder, value, onChangeText, secureTextEntry = false}) => {

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

export default InputFieldRegisterUser;