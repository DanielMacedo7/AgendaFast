import React from "react";
import styles from "../assets/style";
import { View } from "react-native";
import { useState } from "react";
import Sidebar from "../components/home/SideBar";
import DateInput from "../components/schedulling/DateInput";

const SchedullingScreen = () => {

    const [date, setDate] = useState(new Date());

    return (

        <View style={styles.container}>
           
           <Sidebar />

            <DateInput date={date} onChange={setDate} />
 


        </View>

    );

}


export default SchedullingScreen;