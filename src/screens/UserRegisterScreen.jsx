import React, { useState } from "react";
import { View, Icon, TouchableOpacity } from "react-native";
import styles from "../assets/style";
import ButtonSaveUser from "../components/userRegister/ButtonSaveUser";
import ComboBoxRegisterUser from "../components/userRegister/ComboBoxRegisterUser";
import HeaderRegisterUser from "../components/userRegister/HeaderRegisterUser";
import InputFieldRegisterUser from "../components/userRegister/InputFieldRegisterUser";

const UserRegisterScreen = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState(1); 

  const [response, setResponse] = useState(null);

  const [open, setOpen] = useState(false);

 
  const genderCombo = [
    { label: "Usuário", value: 1 },
    { label: "Estabelecimento", value: 2 },
  ];

  
  const handleSaveUser = async () => {
    const autenticacao = {
      username: username,
      password: password,
      tipoCadastroId: select,
    };
  
    console.log('📤 Dados enviados:', JSON.stringify(autenticacao)); 
  
    try {
      const res = await fetch('http://localhost:8080/autenticacao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(autenticacao),
      });
  
      const responseData = await res.json().catch(() => null);
      console.log('📥 Status da resposta:', res.status);
      console.log('📥 Corpo da resposta:', responseData);
  
      if (res.ok) {
        alert('✅ Usuário salvo com sucesso!');
      } else {
        alert(`❌ Erro ao salvar usuário: ${res.status}`);
      }
    } catch (error) {
      console.error('❌ Erro na requisição:', error);
    }
  };
  
  
return (    
    
    <View style={styles.container}>

        <HeaderRegisterUser />

        <InputFieldRegisterUser 
            placeholder="Login"
            value={username}
            onChangeText={setUsername}  
        />

        <InputFieldRegisterUser 
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />

    <ComboBoxRegisterUser 
        open={open}  
        value={select} 
        items={genderCombo}
        setOpen={setOpen}  
        setValue={setSelect}
        placeholder="Selecione o tipo do cadastro..."
      />

        <ButtonSaveUser title="Salvar" onPress={handleSaveUser}/>    


    </View>

 
   ); 
};


export default UserRegisterScreen;