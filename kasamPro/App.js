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
import thireteen from './pages/questions/thireteen';
import fourteen from './pages/questions/fourteen';
import fifteen from './pages/questions/fifteen';
import sixteen from './pages/questions/sixteen';
import seventeen from './pages/questions/seventeen';
import eighteen from './pages/questions/eighteen';
import nineteen from './pages/questions/nineteen';
import twenty from './pages/questions/twenty';
import twentyone from './pages/questions/twentyone';
import twentytwo from './pages/questions/twentytwo';
import twentythree from './pages/questions/twenteythree';
import twentyfour from './pages/questions/twentyfour';
import twentyfive from './pages/questions/twentyfive';
import twentysix from './pages/questions/twentysix';
import twentyseven from './pages/questions/twentyseven';
import twentyeight from './pages/questions/twentyeight';
import twentynine from './pages/questions/twentynine';
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
            title: 'Fråga 12/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
            },
    thireteen: {screen: thireteen,
        navigationOptions: {
            title: 'Fråga 13/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    fourteen: {screen: fourteen,
        navigationOptions: {
            title: 'Fråga 14/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    fifteen: {screen: fifteen,
        navigationOptions: {
            title: 'Fråga 15/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    sixteen: {screen: sixteen,
        navigationOptions: {
            title: 'Fråga 16/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    seventeen: {screen: seventeen,
        navigationOptions: {
            title: 'Fråga 17/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    eighteen: {screen: eighteen,
        navigationOptions: {
            title: 'Fråga 18/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    nineteen: {screen: nineteen,
        navigationOptions: {
            title: 'Fråga 19/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twenty: {screen: twenty,
        navigationOptions: {
            title: 'Fråga 20/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentyone: {screen: twentyone,
        navigationOptions: {
            title: 'Fråga 21/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentytwo: {screen: twentytwo,
        navigationOptions: {
            title: 'Fråga 22/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentythree: {screen: twentythree,
        navigationOptions: {
            title: 'Fråga 23/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentyfour: {screen: twentyfour,
        navigationOptions: {
            title: 'Fråga 24/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentyfive: {screen: twentyfive,
        navigationOptions: {
            title: 'Fråga 25/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentysix: {screen: twentysix,
        navigationOptions: {
            title: 'Fråga 26/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentyseven: {screen: twentyseven,
        navigationOptions: {
            title: 'Fråga 27/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentyeight: {screen: twentyeight,
        navigationOptions: {
            title: 'Fråga 28/29',
            gesturesEnabled: false,
            headerTitleStyle: {
                color: '#9BC661',
            }}
    },
    twentynine: {screen: twentynine,
        navigationOptions: {
            title: 'Fråga 29/29',
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