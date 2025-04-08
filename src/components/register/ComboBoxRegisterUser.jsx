import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../assets/style';
import { View } from 'react-native-web';


const ComboBoxRegisterUser = ({open, value, items, setOpen, setValue, placeholder}) => {

    return (  
    
    <View style={styles.container}>    
        <DropDownPicker style={styles.dropDown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            placeholder={placeholder || 'Selecione...'}                
        />
    </View>

    );
};


export default ComboBoxRegisterUser;