import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function Form({addHandler}) {

    const [text, setValue] = useState('');
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View> 
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Впишіть справу...'></TextInput>
            <View></View>
            <Button color="#15eb20" title='Додати справу' onPress={() => addHandler(text)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
       borderBottomWidth: 1,
       borderColor: '#000',
       padding: 10,
       marginVertical: 30,
       marginHorizontal: '10%',
       width: '80%'
    },
});
