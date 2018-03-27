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
import result from './pages/result';


export default class App extends React.Component{
    render(){
        return(
            <AppNavigator/>
        )
    }
}

const AppNavigator = StackNavigator({
    LoginScreen: {screen: LoginScreen ,
        navigationOptions: {
            title: 'Home',}
            },
    First: {screen: First,
        navigationOptions: {
            title: 'Fråga 1',}
            },
    two: {screen: two,
        navigationOptions: {
            title: 'Fråga 2',}
            },
    third: {screen: third,
        navigationOptions: {
            title: 'Fråga 3',}
            },
    four: {screen: four,
        navigationOptions: {
            title: 'Fråga 4',}
            },
    five: {screen: five,
        navigationOptions: {
            title: 'Fråga 5',}
            },
    six: {screen: six,
        navigationOptions: {
            title: 'Fråga 6',}
            },
    seven: {screen: seven,
        navigationOptions: {
            title: 'Fråga 7',}
            },
    eight: {screen: eight,
        navigationOptions: {
            title: 'Fråga 8',}
            },
    nine: {screen: nine,
        navigationOptions: {
            title: 'Fråga 9',}
            },
    ten: {screen: ten,
        navigationOptions: {
            title: 'Fråga 10',}
            },
    eleven: {screen: eleven,
        navigationOptions: {
            title: 'Fråga 11',}
            },
    twelve: {screen: twelve,
        navigationOptions: {
            title: 'Fråga 12',}
            },
    result:{screen: result,
        navigationOptions: {
            title: 'Results',}
    }

})