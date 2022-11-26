import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


function MyButton(props) {
    const styles = StyleSheet.create({
        texts: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18
        },
        button: {
            backgroundColor: props.color || '#EEE',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 5,
            marginVertical: 18,
            marginHorizontal: 8,
            padding: 8
        }
    })

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.texts}> {props.title} </Text>
        </TouchableOpacity>
    );
};


export default MyButton;
