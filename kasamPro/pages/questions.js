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
                        1. Har du en känsla av att du inte riktigt bryr dig om vad som händer runt omkring
                        dig ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        2. Livet är....
                    </Text>
                    <Text style={styles.questionStyle}>
                        3. Hittills har ditt liv....
                    </Text>
                    <Text style={styles.questionStyle}>
                        4. De flesta saker som du gör i framtiden kommer troligtvis att vara.
                    </Text>
                    <Text style={styles.questionStyle}>
                        5. När du tänker på ditt liv, händer det ofta att du...
                    </Text>
                    <Text style={styles.questionStyle}>
                        6. Är dina dagliga sysslor en källa till ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        7. Du är inställd på att ditt personliga liv i framtiden kommer att vara...
                    </Text>
                    <Text style={styles.questionStyle}>
                        8. Hur ofta känner du att det inte är någon mening med de saker du gör i ditt dagliga liv ?
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Hanterbarhet
                    </Text>
                    <Text style={styles.questionStyle}>
                        1. När du har varit tvungen att göra någonting som krävde samarbete med andra, hade
                        du då en känsla av att det ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        2. Har det hänt att människor som du litat på har gjort dig besviken ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        3. Känner du dig orättvist behandlad ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        4. Vilket påstående beskriver bäst hur du ser på livet ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        5. När något otrevligt hände tidigare brukade du
                    </Text>
                    <Text style={styles.questionStyle}>
                        6. När du gör något som får dig att känna dig väl tillmods
                    </Text>
                    <Text style={styles.questionStyle}>
                        7. Tror du att det i framtiden alltid kommer att finnas människor som du kan räkna med ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        8. Även en människa med stark självkänsla kan ibland känna sig som en olycksfågel.
                        Hur ofta har du kännt det så ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        9. När du tänker på svårigheter som du troligtvis kommer att möta inom viktiga
                        områden i ditt liv, har du då en känsla av att
                    </Text>
                    <Text style={styles.questionStyle}>
                        10. Hur ofta har du känslor som du inte är säker på att du kan kontrollera ?
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Begriplighet
                    </Text>
                    <Text style={styles.questionStyle}>
                        1. När du talar med människor, har du då en känsla av att de inte förstår dig ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        2. Har det hänt att du blivit överraskad av beteendet hos personer som du trodde att du kände väl ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        3. De senaste tio åren har ditt liv varit
                    </Text>
                    <Text style={styles.questionStyle}>
                        4. Har du en känsla av att du befinner dig i en obekant situation och inte vet vad du ska göra ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        5. När du ställs inför ett svårt problem är lösningen
                    </Text>
                    <Text style={styles.questionStyle}>
                        6. I framtiden kommer ditt liv förmodligen att vara
                    </Text>
                    <Text style={styles.questionStyle}>
                        7. Har du mycket motstridiga känslor och tankar ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        8. Händer det att du har känslor inom dig som du helst inte vill känna ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        9. Händer det att du har en känsla av att du inte vet exakt vad som håller på att hända ?
                    </Text>
                    <Text style={styles.questionStyle}>
                        10. När något har hänt, har du vanligtvis funnit att
                    </Text>
                    <Text style={styles.questionStyle}>
                        11. Tänk på de människor du kommer i kontakt med dagligen, bortsett från dem som står dig närmast. Hur väl känner du de flesta av dem ?
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
