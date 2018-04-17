import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Alert,
    CameraRoll,
    TouchableOpacity,
} from 'react-native';
import {data} from "./store";
import {Fonts} from "./Fonts";
import * as firebase from "firebase";
import {captureScreen} from 'react-native-view-shot';


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
        super(props);
        this.state ={
            allScore : '' ,
            allUsers: '',
            imageURI: null
        };
        this.getData = this.getData.bind(this);
    }
    capture() {
        captureScreen({
            format: "jpg",
            quality: 0.8
        })
            .then(
                uri => {
                    console.log("Image saved to ", uri);
                    let saveResult = CameraRoll.saveToCameraRoll(uri, 'photo').then(Alert.alert('Bild sparad'));
                    this.setState({ imageURI: saveResult });
                }
            )
            .catch(error => console.log('error save: ', error));
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

    static navigationOptions = ({navigation}) => {

        return {
            headerRight: (
                <TouchableOpacity
                    onPress = {() => navigation.navigate('LoginScreen')}
                >
                    <View style={{backgroundColor: '#9BC661',borderRadius:20}}>
                        <Text style={styles.home}>
                            Hem
                        </Text>
                    </View>
                </TouchableOpacity>
            ),
        }};

render(){
    var done =  this.state.allScore /this.state.allUsers ;
        return (
            <View style={{backgroundColor:'white', alignItems:'center',flex:1, justifyContent:'space-around'}}>
                <View>
                    <Text style={{fontSize:25,textAlign:'center', lineHeight:60,color:'black',fontFamily:Fonts.Montserrat}}>
                        Din upplevda KASAM
                    </Text>
                    <Text style={{marginLeft:'auto',marginRight:'auto', fontSize:40,fontFamily:Fonts.Montserrat, color:'#9BC661'}}>
                        {data[0]+data[1]+data[2]+data[3]+data[4]+data[5]+data[6]+data[7]+data[8]+data[9]+data[10]+data[11]}
                    </Text>
                    <Text style={{fontSize:15,textAlign:'center', lineHeight:60,color:'black',fontFamily:Fonts.Montserrat}}>
                        Genomsnittligt värde
                    </Text>
                    <Text style={{fontSize:15,textAlign:'center', lineHeight:60,color:'black',
                        fontFamily:Fonts.Montserrat, bottom:30}}>
                        {Math.ceil(done)}
                    </Text>
                </View>

                <View style={styles.rectangle2}>
                    <Text style={styles.point}>
                        Meningsfullhet: {data[0]+data[1]+data[2]+data[3]}
                    </Text>
                    <Text style={styles.point}>
                        Hanterbarhet:  {data[4]+data[5]+data[6]+data[7]}
                    </Text>
                    <Text style={styles.point}>
                        Begriplighet:  {data[8]+data[9]+data[10]+data[11]}
                    </Text>
                </View>
                <TouchableHighlight onPress={() => this.capture()}
                                    underlayColor='transparent'
                >
                    <View style={{backgroundColor: '#9BC661', borderRadius:20, width:220}}>
                        <Text style={styles.next}>
                            Spara
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        )

    }
}
const styles = StyleSheet.create({
    rectangle2:{
        width: 170 * 2,
        height: 200,
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
    home: {
        color: 'black',
        padding: 10,
        fontSize: 15,
        textAlign:'center',
        fontFamily:Fonts.Montserrat
    },

});
export default result;