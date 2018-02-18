import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

class LoginScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#aed581', alignItems:'center',flex:1, justifyContent:'space-around'}}>
                <Text style={styles.welcome}> Welcome to KASAM!</Text>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('First')}
                    underlayColor='transparent'
                >
                    <View style={{backgroundColor: 'green', borderRadius:20, width:220}}>
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
        fontFamily:'Times New Roman'
    },
    next: {
        color: 'white',
        padding: 20,
        fontSize: 25,
        textAlign:'center',
        fontWeight:'bold'
    }
})
export default LoginScreen;