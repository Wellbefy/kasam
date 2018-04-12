import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../Fonts';

const Question1 = () => {
    return (
        <View>
            <Text style={styles.questionStyle}>
                1. Jag upplever att min möjlighet att påverka är...
            </Text>
        </View>
    );
};
const styles= StyleSheet.create ({
    questionStyle:{
        fontSize: 30,
        margin: 20,
        textAlign:'center',
        fontFamily: Fonts.Montserrat
    }
})

export default Question1 ;