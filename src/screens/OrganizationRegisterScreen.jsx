import React, { useState } from "react";
import { View } from "react-native-web";
import styles from "../assets/style";
import ButtonSaveOrganization from "../components/organizationRegister/ButtonSaveOrganization";
import ComboBoxRegisterOrganization from "../components/organizationRegister/ComboBoxRegisterOrganization";
import HeaderRegisterOrganization from "../components/organizationRegister/HeaderRegisterOrganization";
import InputFieldRegisterOrganization from "../components/organizationRegister/InputFieldRegisterOrganization";


const OrganizationRegisterScreen = () => {

  const [nameOrganization, setNameOrganization] = useState("");
  const [loginOrganization, setLoginOrganization] = useState(""); 
  const [passwordOrganization, setPasswordOrganization] = useState("");
  const [address, setAddress] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [socialMedia, setSocialMedia] = useState("");  
  const [open, setOpen] = useState("");
  const [select, setSelect] = useState(null);

  const genderCombo = [
        { label: "Barbearia", value: 1 },
        { label: "Salão de Beleza", value: 2 },
    ];

    return (

        <View style={styles.container}>

            <HeaderRegisterOrganization />

            <InputFieldRegisterOrganization
            placeholder="Nome da Organização"
            value={nameOrganization}
            onChangeText={setNameOrganization}

            />

            <InputFieldRegisterOrganization
            placeholder="Login"
            value={loginOrganization}
            onChangeText={setLoginOrganization}

            />

            <InputFieldRegisterOrganization
            placeholder="Senha"
            value={passwordOrganization}
            onChangeText={setPasswordOrganization}
            secureTextEntry={true}

            />

            <InputFieldRegisterOrganization
            placeholder="Endereço (Ex: Rua Rodovia Prefeito João Sampaio - 222) "
            value={address}
            onChangeText={setAddress}

            />


            <InputFieldRegisterOrganization
            placeholder="Telefone (99) 9999-9999"
            value={numberPhone}
            onChangeText={setNumberPhone}

            />


            <InputFieldRegisterOrganization
            placeholder="Rede Social ( Twitter, Instagram ou Facebook)"
            value={socialMedia}
            onChangeText={setSocialMedia}

            />


            <ComboBoxRegisterOrganization
            open={open}
            value={select}
            items={genderCombo}
            setOpen={setOpen}
            setValue={setSelect}
            placeholder="Selecione a especialidade do seu negócio..."
            />


            <ButtonSaveOrganization title="Salvar Organização" onPress={() => alert("Organização Salva com Sucesso!")}/>

        </View>




    );

}

export default OrganizationRegisterScreen;