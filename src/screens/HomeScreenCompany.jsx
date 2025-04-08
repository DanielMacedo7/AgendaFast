import React, { useState } from "react";
import { View } from "react-native";
import styles from "../assets/style";
import SidebarCompany from "../components/home/SideBarCompany";





const HomeScreenCompany = () => {

return (    

    <View style={styles.container}>

        <SidebarCompany />


    </View>

  );
};


export default HomeScreenCompany;