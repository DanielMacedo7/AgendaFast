import React, { useState } from "react";
import { View } from "react-native";
import styles from "../assets/style";
import Header from "../components/login/Header";
import InputField from "../components/login/InputField"
import ButtonEnter from "../components/login/ButtonEnter";
import AlertaSignUp from "../components/login/AlertaSignUp";
import FooterButtons from "../components/login/FooterButtons";
import Footer from "../components/login/Footer";

const LoginScreen = () => {

const [login, setLogin] = useState("");
const [password, setPassword] = useState("");

const Welcome = "Entrar";
  
//teste
const handleLogin = () => {
    console.log("Login:", login, "Senha:", password);
    alert("Login efetuado com sucesso, seja bem vindo!")
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
        value={password}
        onChangeText={setPassword}
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