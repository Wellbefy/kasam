import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image,TouchableOpacity} from 'react-native';

class LoginScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#e0f7fa', alignItems:'center',flex:1, justifyContent:'space-around'}}>
                <Text style={{fontSize:35,justifyContent:'center',alignItems:'center',lineHeight:75, color:'#000000',fontFamily:'Times New Roman'}}> Welcome to KASAM!</Text>
                <TouchableOpacity
                    style={{ padding:20,
                        alignItems:'center',
                        left:105,
                        borderStyle:'dashed',
                    }}
                    onPress={() =>
                        this.props.navigation.navigate('First')}>
                    <Image
                        style={{width:170, height:50, alignItems:'center', justifyContent:'center', right:110}}
                        source={require('/Users/Mido/kasam1/kasamPro/img/start.png')}

                    />
                </TouchableOpacity>
            </View>
        )
    }
}
export default LoginScreen;