import React, {Component} from 'react';
import {View,
        Text,
        StyleSheet,
        TouchableOpacity
}from 'react-native';
import {Fonts} from "./Fonts";


class LoginScreen extends Component{
    static navigationOptions = {
        header: null
    };

    render(){
        return(
            <View style={{backgroundColor:'white',flex:1,alignItems:'center', justifyContent:'space-between'}}>
                <View style={{top: 70}}>
                <Text style={styles.welcome}> Vad har du för KASAM?</Text>
                </View>

                <View style={{bottom:75}}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('First')}
                    underlayColor='transparent'
                >
                    <View style={{backgroundColor: '#9bc661', borderRadius:20, width:220}}>
                        <Text style={styles.next}>
                            Starta
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={{top:30}}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('questions')}
                    underlayColor='transparent'
                >
                    <View style={{backgroundColor: '#FED34e', borderRadius:20, width:220}}>
                        <Text style={styles.next}>
                            Se frågor
                        </Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    welcome:{
        fontSize:30,
        lineHeight:75,
        color:'#000000',
        fontFamily:Fonts.Montserrat,
        textAlign:'center'
    },
    next: {
        color: 'white',
        padding: 20,
        fontSize: 25,
        textAlign:'center',
        fontFamily: Fonts.Montserrat
    }
})
export default LoginScreen;