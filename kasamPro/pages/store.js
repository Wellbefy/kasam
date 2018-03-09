import {AsyncStorage} from "react-native";

export const data = [ ]
AsyncStorage.setItem('valueInt', JSON.stringify(data))

AsyncStorage.getItem('valueInt').then((value)=>{
    const d = JSON.parse(value)
    console.log(value)
})