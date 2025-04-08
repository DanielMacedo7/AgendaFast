import React, { useState } from "react";
import { View, Icon, TouchableOpacity } from "react-native";
import styles from "../assets/style";
import ButtonSaveUser from "../components/register/ButtonSaveUser";
import ComboBoxRegisterUser from "../components/register/ComboBoxRegisterUser";
import HeaderRegisterUser from "../components/register/HeaderRegisterUser";
import InputFieldRegisterUser from "../components/register/InputFieldRegisterUser";
import ButtonBackRoute from "../components/register/ButtonBackRoute";


const RegisterScreen = () => {


  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [select, setSelect] = useState(1); 

  const [response, setResponse] = useState(null);

  const [open, setOpen] = useState(false);

 
  const genderCombo = [
    { label: "Usuário", value: 1 },
    { label: "Estabelecimento", value: 2 },
  ];

  
  const handleSaveUser = async () => {
    const autenticacao = {
      login: login,
      senha: senha,
      tipoCadastroId: select,
    };
  
    try {
      //192.168.0.106:8080
      const res = await fetch('http://localhost:8080/autenticacao/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(autenticacao),
      });
  
      const responseData = await res.json().catch(() => null);
  
      if (res.ok) {
        alert('Usuário salvo com sucesso!');
      } else {
        alert(`Erro ao salvar usuário: ${res.status}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
  
  
return (    
    
  <View style={styles.container}>
  
  <ButtonBackRoute />

  <HeaderRegisterUser />   

      <InputFieldRegisterUser
      placeholder="Login"
      value={login}
      onChangeText={setLogin} />

      <InputFieldRegisterUser
      placeholder="Senha"
      value={senha}
      onChangeText={setSenha}
      secureTextEntry={true} />

      <ComboBoxRegisterUser
      open={open}
      value={select}
      items={genderCombo}
      setOpen={setOpen}
      setValue={setSelect}
      placeholder="Selecione o tipo do cadastro..." />

      <ButtonSaveUser title="Salvar" onPress={handleSaveUser} />


  </View>

 
   ); 
};


export default RegisterScreen;