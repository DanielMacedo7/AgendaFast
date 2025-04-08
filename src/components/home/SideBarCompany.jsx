import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../assets/style';

const SidebarCompany = () => {
  
  const navigation = useRouter();
  
  
  return (
    <View style={styles.sidebar}>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.push("/homeScreenCompany")}
      >
        <Icon name="home" size={24} color="#FFFFFF" />
        <Text style={styles.menuText}>Início</Text>
      </TouchableOpacity>

    
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.push("/Settings")}
      >
        <Icon name="visibility" size={24} color="#FFFFFF" />
        <Text style={styles.menuText}>Consulta Agendamento</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.push("/Profile")}
      >
        <Icon name="business" size={24} color="#FFFFFF" />
        <Text style={styles.menuText}>Perfil Estabelecimento</Text>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.push("/login")}
      >
        <Icon name="logout" size={24} color="#FFFFFF" />
        <Text style={styles.menuText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SidebarCompany;