import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../assets/style';


const ComboBoxRegisterOrganization = ({open, value, items, setOpen, setValue, placeholder}) => {

    return (

        <DropDownPicker style={styles.dropDown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            placeholder={placeholder || 'Selecione...'}                
        />
    );
};


export default ComboBoxRegisterOrganization;