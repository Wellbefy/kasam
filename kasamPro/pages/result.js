import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {data} from "./store";
import {Fonts} from "./Fonts";
import Share from 'react-native-share';
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBjYY8FxoZKku6GVcX1r8Qd6ETlh6XOyMU",
    authDomain: "kasam-8m9m2.firebaseapp.com",
    databaseURL: "https://kasam-8m9m2.firebaseio.com",
    projectId: "kasam-8m9m2",
    storageBucket: "kasam-8m9m2.appspot.com"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
rootRef = firebase.database().ref();
var resultRef = rootRef.child('result');

class result extends Component{
    constructor(props) {
        super(props)
        this.state ={
            allScore : '' ,
            allUsers: ''
        };
        this.getData = this.getData.bind(this);
    }
    getData(dataa){
        var results = dataa.val();
        var keys = Object.keys(results);
        var score = 0;
        var count = 0
        // console.log(keys);
        for(var i=0; i< keys.length; i++){
            var k = keys[i];
            count += results[k].count;
            score += results[k].score;
            //  console.log(count, score);
        }
        this.setState({
            allScore: score,
            allUsers: count
        }) ;
    }
    componentWillMount(){
        resultRef.push({
            score: (data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]),
            count: (1)
        });
        resultRef.on('value', this.getData);
    }

    onOpen() {
        console.log("OPEN")
    }
    static navigationOptions = {
        title: 'Resultat',
        headerLeft: null
    };

render(){
    let shareOptions = {
            title: "Kasam Test",
            message: "Join Us",
            url: "http://www.wellbefy.se/",
            subject: "Wellbefy " ,
        };
    var done =  this.state.allScore /this.state.allUsers ;

        return (
            <View style={{backgroundColor:'white', alignItems:'center',flex:1, justifyContent:'space-around'}}>
                <View>
                    <Text style={{fontSize:25,textAlign:'center', lineHeight:60,color:'black',fontFamily:Fonts.Montserrat}}>
                        Din upplevda KASAM :
                    </Text>
                    <Text style={{marginLeft:'auto',marginRight:'auto', fontSize:40,fontFamily:Fonts.Montserrat, color:'#9BC661'}}>
                        {data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]}
                    </Text>
                    <Text style={{fontSize:15,textAlign:'center', lineHeight:60,color:'black',fontFamily:Fonts.Montserrat, fontWeight:'bold'}}>
                        genomsnittligt värde :
                    </Text>
                    <Text style={{fontSize:15,textAlign:'center', lineHeight:60,color:'black',
                        fontFamily:Fonts.Montserrat, fontWeight:'bold'}}>
                        {done}
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
                <TouchableOpacity onPress={()=>{
                    this.onOpen();
                    setTimeout(() => {
                        Share.open(shareOptions)
                            .catch(err => console.log(err));
                    },300);}}>
                    <View style={{backgroundColor: '#9BC661', borderRadius:20, width:220}}>
                        <Text style={styles.next}>
                            Share
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    rectangle2:{
        width: 170 * 2,
        height: 200,
        top:20,
        backgroundColor:'#9BC661',
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