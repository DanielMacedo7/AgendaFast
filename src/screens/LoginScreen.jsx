import React, { useState } from "react";
import { View } from "react-native";
import styles from "../assets/style";
import Header from "../components/login/Header";
import InputField from "../components/login/InputField"
import ButtonEnter from "../components/login/ButtonEnter";
import AlertaSignUp from "../components/login/AlertaSignUp";
import FooterButtons from "../components/login/FooterButtons";
import Footer from "../components/login/Footer";
import { useRouter } from "expo-router";

const LoginScreen = () => {

const navigation = useRouter();

const [login, setLogin] = useState("");
const [senha, setSenha] = useState("");

const Welcome = "Entrar";
  

const handleLogin = async () => {

  const autenticacao = {
    login: login,
    senha: senha
  };

  try {
    //localhost
    //192.168.0.106:8080
    const res = await fetch('http://localhost:8080/autenticacao/logar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(autenticacao),
    });

    const responseData = await res.json().catch(() => null);
    
    if (res.ok && responseData) {

      if (responseData.tipo === 1) {

        navigation.push("/homeScreenUser"); 
        alert(`Login efetuado com Sucesso!`);

      } else if (responseData.tipo === 2) {

        navigation.push("/homeScreenCompany"); 
        alert(`Login efetuado com Sucesso!`);
      
      }

    } else {
      alert(`Erro ao efetuar login: ${res.status} - Credenciais Inválidas por favor, reveja as informações digitadas.`);
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
};

    return(

    <View style={styles.container}>    
        
        <Header />

        <InputField 
        placeholder="Login"
        value={login}
        onChangeText={setLogin}

        />
        
        <InputField 
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}

        />

        <ButtonEnter title={Welcome} onPress={handleLogin}/>

        <AlertaSignUp />

        <FooterButtons />

        <Footer />

    </View>
    
    

    );
}; 



export default LoginScreen;