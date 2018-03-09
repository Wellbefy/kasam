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
import {Fonts} from "../Fonts";
import {data} from "../store";

class twelve extends Component{
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
        data[11] = this.sliderOptions[this.refs.slider.state.item].value ;
        data.push() ;
        console.log(data);
    }

    render() {
        const { currentItem } = this.state;
        return <View style={styles.container}>
                <View style={styles.rectangle}>
                    <Text style={styles.welcome}>
                        12. Min medvetenhet kring organisationens övergripande mål är ...
                    </Text>
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

            <View style={{bottom:40}}>
                <View style={{top:5}}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('result')}
                        underlayColor='transparent'
                    >
                        <View style={{backgroundColor: 'green', borderRadius:20, width:220}}>
                            <Text style={styles.next}>
                                Next
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={{top:15}}>
                    <TouchableHighlight
                        onPress={() => this.props.navigation.goBack()}
                        underlayColor='transparent'
                    >
                        <View style={{backgroundColor: 'green', borderRadius:20, width:220}}>
                            <Text style={styles.next}>
                                Back
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>

            <Text style={styles.choice}>
                { this.sliderOptions[currentItem].value === 1 ? 'Helt obefintlig' : ' ' &&
                  this.sliderOptions[currentItem].value === 6 ? 'Mycket stor' : ' ' }
            </Text>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#aed581'
    },
    welcome: {
        fontSize: 27,
        margin: 10,
        bottom:-40,
        fontFamily:Fonts.Montserrat,
        textAlign:'center'
    },
    rectangle:{
        width: 180 * 2,
        height: 340,
        top:10,
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
    snapsliderContainer: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        margin:40,
        bottom:120
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
    next: {
        color: 'white',
        padding: 10,
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily:Fonts.Montserrat
    },
    choice: {
        fontSize: 20,
        fontFamily:Fonts.Montserrat,
        bottom:180,
        textAlign:'center'
    }
});
export default twelve;