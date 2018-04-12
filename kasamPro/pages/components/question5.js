import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Fonts} from '../Fonts';

const Question5 = () => {
    return (
        <View>
            <Text style={styles.questionStyle}>
                5. Jag upplever att stödet från min närmsta chef är...
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

export default Question5;