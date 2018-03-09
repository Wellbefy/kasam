import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight,AsyncStorage} from 'react-native';
import {data} from "./store";
import {Fonts} from "./Fonts";

class result extends Component{

    constructor(props) {
        super(props)
    }



    render(){
        AsyncStorage.getItem('valueInt', (error,value) => {
            if (!error) { //If there are no errors
                console.log(data)
            }
        });

        return (
            <View style={{backgroundColor:'#aed581', alignItems:'center',flex:1, justifyContent:'space-around'}}>
                <View style={styles.rectangle}>
                    <Text style={{fontSize:35,textAlign:'center', lineHeight:60,color:'#000000',fontFamily:Fonts.Montserrat}}>
                        Your POINTS !
                    </Text>
                    <Text style={styles.point}>
                        {this.props.currentItem}
                    </Text>
                    <Text style={{marginLeft:'auto',marginRight:'auto', fontSize:40,fontFamily:Fonts.Montserrat}}>
                        {data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]}
                    </Text>
                </View>

                <View style={styles.rectangle2}>
                    <Text style={styles.point}>
                        Meningsfullhet : {data[0]+data[1]+data[2]+data[3]}
                    </Text>
                    <Text style={styles.point}>
                        Hanterbarhet :  {data[4]+data[5]+data[6]+data[7]}
                    </Text>
                    <Text style={styles.point}>
                        Begriplighet :  {data[8]+data[9]+data[10]+data[11]}
                    </Text>
                </View>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('Home')}
                    underlayColor='transparent'
                >
                    <View style={{backgroundColor: 'green', borderRadius:20, width:220}}>
                        <Text style={styles.next}>
                            Start Again
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    rectangle:{
        width: 170 * 2,
        height: 200,
        top:15,
        backgroundColor:'#e1ffb1',
        borderWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#aaa',
        borderRightColor:'#aaa',
        borderTopColor:'#ddd',
        borderLeftColor:'#ddd',
        borderRadius:15,
        position:'relative',
    },
    rectangle2:{
        width: 170 * 2,
        height: 200,
        top:20,
        backgroundColor:'#e1ffb1',
        borderWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#aaa',
        borderRightColor:'#aaa',
        borderTopColor:'#ddd',
        borderLeftColor:'#ddd',
        borderRadius:15,
        position:'relative',
    },
    point:{
        fontSize:20,
        lineHeight:60,
        color:'#000000',
        left:20,
        fontFamily:Fonts.Montserrat
    },
    next: {
        color: 'white',
        padding: 10,
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily:Fonts.Montserrat
    },

});
export default result;