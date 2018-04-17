import React, { Component } from 'react';

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
import questions from "./pages/questions";

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
            title: 'Tillbaka',
        }
            },
    First: {screen: First,
        navigationOptions: {
            headerLeft: null,
            title: 'Fråga 1/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    two: {screen: two,
        navigationOptions: {
            title: 'Fråga 2/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    third: {screen: third,
        navigationOptions: {
            title: 'Fråga 3/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    four: {screen: four,
        navigationOptions: {
            title: 'Fråga 4/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    five: {screen: five,
        navigationOptions: {
            title: 'Fråga 5/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    six: {screen: six,
        navigationOptions: {
            title: 'Fråga 6/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    seven: {screen: seven,
        navigationOptions: {
            title: 'Fråga 7/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    eight: {screen: eight,
        navigationOptions: {
            title: 'Fråga 8/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    nine: {screen: nine,
        navigationOptions: {
            title: 'Fråga 9/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    ten: {screen: ten,
        navigationOptions: {
            title: 'Fråga 10/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    eleven: {screen: eleven,
        navigationOptions: {
            title: 'Fråga 11/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    twelve: {screen: twelve,
        navigationOptions: {
            title: 'Fråga 12/12',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    result: {screen: result,
        navigationOptions: {
            headerLeft: null,
            title: 'Ditt resultat',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    questions: {screen: questions,
    navigationOptions:{
        title: 'Frågor',
        headerTitleStyle: {
            color: '#9BC661',
        },
    }}
});