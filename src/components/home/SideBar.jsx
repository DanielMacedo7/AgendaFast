import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../assets/style';

const Sidebar = () => {
  
  const navigation = useRouter();
  
  
  return (
    <View style={styles.sidebar}>

      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.push("/homeScreenUser")}
      >
        <Icon name="home" size={24} color="#FFFFFF" />
        <Text style={styles.menuText}></Text>
      </TouchableOpacity>

    
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.push("/schedullingScreen")}
      >
        <Icon name="book" size={24} color="#FFFFFF" />
        <Text style={styles.menuText}></Text>
      </TouchableOpacity>

      {/* Item: Perfil */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.push("/perfilUserScreen")}
      >
        <Icon name="account-circle" size={24} color="#FFFFFF" />
        <Text style={styles.menuText}></Text>
      </TouchableOpacity>

      {/* Item: Sair */}
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.push("/login")}
      >
        <Icon name="logout" size={24} color="#FFFFFF" />
        <Text style={styles.menuText}></Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;