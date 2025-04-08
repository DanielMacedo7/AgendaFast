import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "../assets/style";
import InputField from "../components/login/InputField";
import ComboBoxRegisterUser from "../components/register/ComboBoxRegisterUser";
import ButtonSaveUser from "../components/register/ButtonSaveUser";
import Sidebar from "../components/home/SideBar";

const PerfilUserScreen = () => {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [redeSocial, setRedeSocial] = useState('');
    const [select, setSelect] = useState(1);
    const [open, setOpen] = useState(false);
    
    const selectSexo = [
        {label: "Masculino", value: 1},
        {label: "Feminino", value: 2}
    ]

    return (

        <View style={styles.container}> 

            <Sidebar />

            <View style={styles.header}>

                <Text style={styles.title}>Informações Adicionais</Text>

            </View>    

        <InputField 
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}

        />
        
        <InputField 
        placeholder="Telefone (99) 9999-9999"
        value={telefone}
        onChangeText={setTelefone}
        

        />

        <InputField 
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}

        />
        
        <InputField 
        placeholder="Data de Nascimento"
        value={dtNascimento}
        onChangeText={setDtNascimento}

        />

        <InputField 
        placeholder="Rede Social"
        value={redeSocial}
        onChangeText={setRedeSocial}

        />

        <ComboBoxRegisterUser
        open={open}
        value={select}
        items={selectSexo}
        setOpen={setOpen}
        setValue={setSelect}
        placeholder="Sexo..." />    

        <ButtonSaveUser title="Salvar" />    

    </View>

    );
}

export default PerfilUserScreen;