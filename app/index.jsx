import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "../assets/style";

const App = () => {
  //Use state serve para receber o valor que será setado para os campos de input.
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/notebook.png")} style={styles.icon} />
        <Text style={styles.title}>Agenda Fast</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Login"
        placeholderTextColor="#666"
        value={login}
        onChangeText={(text) => setLogin(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#666"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

     <Text style={styles.alertaSignUp}>Caso ainda não possua cadastro.{' '}
        {'\n'}Por favor efetue-o em uma das funcionalidades abaixo!</Text>

      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="person" size={24} color="#FFFFFF" />
          <Text style={styles.footerButtonText}>Usuario</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.footerButton}>
          <Icon name="group" size={24} color="#FFFFFF" />
          <Text style={styles.footerButtonText}>Organização</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footer}>@ 2025 AgendaFast App</Text>  

    </View>
  );
};

export default App;
