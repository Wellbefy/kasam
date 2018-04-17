import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {Fonts} from "./Fonts";

export default class questions extends Component{

    static navigationOptions = ({navigation}) => {

        return {
            headerRight: (
                <TouchableOpacity
                    onPress = {() => navigation.navigate('First')}
                >
                    <View style={{backgroundColor: '#FED34e',borderRadius:20, right:1.7}}>
                        <Text style={styles.next}>
                            Starta
                        </Text>
                    </View>
                </TouchableOpacity>
            ),
        }};

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Meningsfullhet
                    </Text>
                    <Text style={styles.questionStyle}>
                        1. Jag upplever att min möjlighet att påverka är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        2. Jag upplever att mitt dagliga arbete är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        3. Trivsel på arbetsplatsen upplever jag är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        4. Mitt inflytandet på arbetsplatsen är...
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Hanterbarhet
                    </Text>
                    <Text style={styles.questionStyle}>
                        1. Jag upplever att stödet från min närmsta chef är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        2. Jag upplever att stödet från mina kollegor är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        3. Arbetsbelastningen känner jag är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        4. Jag upplever att tydligheten från min närmsta chef är...
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Begriplighet
                    </Text>
                    <Text style={styles.questionStyle}>
                        1. Jag upplever att återkopplingen från min närmsta chef är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        2. Jag upplever att kunskapen kring mitt arbetsområde är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        3. Jag upplever att min feedback från mina utförda arbetsuppgifter är...
                    </Text>
                    <Text style={styles.questionStyle}>
                        4. Min medvetenhet kring organisationens övergripande mål är...
                    </Text>
                </View>
            </ScrollView>
        )
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        fontFamily: Fonts.Montserrat,
        fontWeight: 'bold'
    },

    questionStyle:{
        fontSize: 15,
        margin: 10,
        fontFamily:Fonts.Montserrat,
    },
    next: {
        color: 'black',
        padding: 10,
        fontSize: 15,
        textAlign:'center',
        fontFamily:Fonts.Montserrat
    },
});
