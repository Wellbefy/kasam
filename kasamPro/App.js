import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import First from './pages/questions/First';
import LoginScreen from './pages/LoginScreen';
import two from './pages/questions/two';
import third from './pages/questions/third';
import four from './pages/questions/four';
import five from './pages/questions/five';
import six from './pages/questions/six';
import seven from './pages/questions/seven';
import eight from './pages/questions/eight';
import nine from './pages/questions/nine';
import ten from './pages/questions/ten';
import eleven from './pages/questions/eleven';
import twelve from './pages/questions/twelve';
import thirteen from './pages/questions/thirteen';
import fourteen from './pages/questions/fourteen';
import fifteen from './pages/questions/fifteen';
import sixteen from './pages/questions/sixteen';
import seventeen from './pages/questions/seventeen';
import eighteen from './pages/questions/eighteen';
import nineteen from './pages/questions/nineteen';
import twenty from './pages/questions/twenty';
import twentyone from './pages/questions/twentyone';
import twentytwo from './pages/questions/twentytwo';
import twentythree from './pages/questions/twentythree';
import twentyfour from './pages/questions/twentyfour';
import twentyfive from './pages/questions/twentyfive';
import twentysix from './pages/questions/twentysix';
import twentyseven from './pages/questions/twentyseven';
import twentyeight from './pages/questions/twentyeight';
import twentynine from './pages/questions/twentynine';
import result from './pages/result';


export default class App extends React.Component{
    render(){
        return(
            <AppNavigator/>
        )
    }
}

const AppNavigator = StackNavigator({
    LoginScreen: {screen: LoginScreen},
    First: {screen: First},
    two: {screen: two},
    third: {screen: third},
    four: {screen: four},
    five: {screen: five},
    six: {screen: six},
    seven: {screen: seven},
    eight: {screen: eight},
    nine: {screen: nine},
    ten: {screen: ten},
    eleven: {screen: eleven},
    twelve: {screen: twelve},
    thirteen: {screen: thirteen},
    fourteen: {screen: fourteen},
    fifteen: {screen: fifteen},
    sixteen: {screen: sixteen},
    seventeen: {screen: seventeen},
    eighteen: {screen: eighteen},
    nineteen: {screen: nineteen},
    twenty: {screen: twenty},
    twentyone: {screen: twentyone},
    twentytwo: {screen: twentytwo},
    twentythree: {screen: twentythree},
    twentyfour: {screen: twentyfour},
    twentyfive: {screen: twentyfive},
    twentysix: {screen: twentysix},
    twentyseven: {screen: twentyseven},
    twentyeight: {screen: twentyeight},
    twentynine: {screen: twentynine},
    result:{screen: result}

})