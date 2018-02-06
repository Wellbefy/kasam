import React, {Component} from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import First from './questions/First';

class result extends Component{
    collectValues() {
     value = this.slidingComplete;
}

    render(){
        return(
            <View style={{backgroundColor:'#e0f7fa', alignItems:'center',flex:1, justifyContent:'space-around'}}>
                <Text style={{fontSize:35,justifyContent:'center',alignItems:'center',lineHeight:75, color:'#000000',fontFamily:'Times New Roman'}}> Your Result!</Text>
                <TouchableHighlight
                    style={{ padding:20,
                        alignItems:'center',
                        left:105,
                        borderStyle:'dashed',
                    }}
                    onPress={() =>
                        this.props.navigation.navigate('First')}>
                    <Image
                        style={{width:170, height:50, alignItems:'center', justifyContent:'center', right:110}}
                        source={require('/Users/Mido/kasam1/kasamPro/img/start-again.png')}
                    />
                </TouchableHighlight>
                <Text>
                    done {this.collectValues()}
                </Text>

            </View>
        )
    }
}
export default result;