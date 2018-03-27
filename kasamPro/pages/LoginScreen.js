import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import {Fonts} from "./Fonts";


class LoginScreen extends Component{
    static navigationOptions = {
        header: null
    }

    render(){
        return(
            <View style={{backgroundColor:'white', alignItems:'center',flex:1, justifyContent:'space-around'}}>
                <Text style={styles.welcome}> Welcome to KASAM!</Text>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('First')}
                    underlayColor='transparent'
                >
                    <View style={{backgroundColor: '#9BC661', borderRadius:20, width:220}}>
                        <Text style={styles.next}>
                            START
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    welcome:{
        fontSize:35,
        justifyContent:'center',
        alignItems:'center',
        lineHeight:75,
        color:'#000000',
        fontFamily:Fonts.Montserrat
    },
    next: {
        color: 'white',
        padding: 20,
        fontSize: 25,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily: Fonts.Montserrat
    }
})
export default LoginScreen;