import {AsyncStorage} from "react-native";

export const data = [1,1,1,1,1,1,1,1,1,1,1,1]
AsyncStorage.setItem('valueInt', JSON.stringify(data))

AsyncStorage.getItem('valueInt').then((value)=>{
    const d = JSON.parse(value)
    console.log(value)
})
AsyncStorage.clear();