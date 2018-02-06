import React, { Component } from 'react';
import SnapSlider from 'react-native-snap-slider';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Image,
    TouchableOpacity
} from 'react-native';

class twenty extends Component{
    sliderOptions = [
        {value: 1, label: '1'},
        {value: 2, label: '2'},
        {value: 3, label: '3'},
        {value: 4, label: '4'},
        {value: 5, label: '5'},
        {value: 6, label: '6',}
    ];

    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.slidingComplete = this.slidingComplete.bind(this);

    }
    getInitialState() {
        return {
            defaultItem: 0,
            currentItem: 0
        };
    }
    slidingComplete(itemSelected) {

        this.setState({ currentItem : itemSelected })
        console.log("slidingComplete");
        console.log("item selected " + this.refs.slider.state.item);
        console.log("item selected(from callback)" + itemSelected);
        console.log("value " + this.sliderOptions[this.refs.slider.state.item].value);
    }

    render() {
        const { currentItem } = this.state;
        return <View style={styles.container}>
            <View>
                <View style={styles.rectangle}>
                    <Text style={styles.welcome}>
                        20. När du gör något som får dig att känna dig väl tillmods ....
                    </Text>
                </View>
            </View>

            <SnapSlider
                ref="slider" containerStyle={styles.snapsliderContainer} style={styles.snapslider}
                itemWrapperStyle={styles.snapsliderItemWrapper}
                itemStyle={styles.snapsliderItem}
                items={this.sliderOptions}
                labelPosition="bottom"
                defaultItem={this.state.defaultItem}
                onSlidingComplete={this.slidingComplete}
                minimumTrackTintColor='#006064'
                step={0.2}

            />

            <View>
                <TouchableOpacity
                    style={styles.touch1}
                    onPress={() =>
                        this.props.navigation.navigate('twentyone')}>
                    <Image
                        style={{width: 150, height: 50}}
                        source={require('/Users/Mido/kasam1/kasamPro/img/next.png')}/>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.touch2}
                    onPress={() =>
                        this.props.navigation.navigate('nineteen')}>
                    <Image
                        style={{width: 150, height: 50}}
                        source={require('/Users/Mido/kasam1/kasamPro/img/back.png')}/>
                </TouchableOpacity>
            </View>

            <Text style={styles.choice}>
                { this.sliderOptions[currentItem].value === 1 ? 'kommer du säkert att fortsätta känna dig väl till mods' : ' ' &&
                this.sliderOptions[currentItem].value === 6 ?  'kommer det säkert att hända något som förstör den goda känslan' : ' ' }
            </Text>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#e0f7fa'
    },
    welcome: {
        fontSize: 27,
        textAlign: 'center',
        margin: 10,
        alignItems:'center',
        bottom:-50,
        fontFamily:'Times New Roman',
        fontWeight:'bold'
    },
    rectangle:{
        width: 180 * 2,
        height: 340,
        top:10,
        backgroundColor:'#aec4c7',
        borderWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#aaa',
        borderRightColor:'#aaa',
        borderTopColor:'#ddd',
        borderLeftColor:'#ddd',
        borderRadius:3
    },
    snapsliderContainer: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        margin:25,
        bottom:90
    },
    snapslider: {
        borderWidth: 0
    },
    snapsliderItemWrapper: {
        borderWidth: 0
    },
    snapsliderItem: {
        borderWidth: 0
    },
    touch1: {
        padding:20,
        bottom:-45,
        backgroundColor:'#DDDDDD',
        alignItems:'center',
        left:90,
        borderStyle:'dashed'
    },
    touch2:{
        padding:20,
        bottom:45,
        backgroundColor:'#DDDDDD',
        alignItems:'center',
        right:90,
        borderStyle:'dashed',
    }  ,
    choice: {
        fontSize: 20,
        fontFamily:'Times New Roman',
        bottom:180,
        fontWeight:'bold',
        textAlign:'center'
    }
});
export default twenty;