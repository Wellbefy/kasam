import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../Fonts';

const Question3 = () => {
    return (
        <View>
            <Text style={styles.questionStyle}>
                3. Jag upplever att stödet från mina kollegor är...
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

export default Question3;