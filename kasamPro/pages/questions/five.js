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

class five extends Component{
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
                <View style={styles.rectangle}>
                    <Text style={styles.welcome}>
                        5. Jag upplever att stödet från min närmsta chef är ...
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

            <View>
                <TouchableHighlight
                    onPress={() => this.props.navigation.navigate('six')}
                    underlayColor='transparent'
                >
                    <View style={{backgroundColor: 'green', borderRadius:20, width:220}}>
                        <Text style={styles.next}>
                            NEXT
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

            <Text style={styles.choice}>
                { this.sliderOptions[currentItem].value === 1 ? ' Helt obefintlig' : ' ' &&
                this.sliderOptions[currentItem].value === 6 ? 'Mycket stor)' : ' ' }
            </Text>

        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#aed581'
    },
    welcome: {
        fontSize: 27,
        margin: 10,
        bottom:-40,
        fontFamily:'Times New Roman',
        fontWeight:'bold',
        textAlign:'center'
    },
    rectangle:{
        width: 200 * 2,
        height: 340,
        top:10,
        backgroundColor:'#e1ffb1',
        borderWidth:1,
        borderStyle:'solid',
        borderBottomColor:'#aaa',
        borderRightColor:'#aaa',
        borderTopColor:'#ddd',
        borderLeftColor:'#ddd',
        borderRadius:3,
        position:'relative',
        flex:50
    },
    snapsliderContainer: {
        borderWidth: 0,
        backgroundColor: 'transparent',
        margin:35,
        bottom:120,
        flex:0
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
        padding: 20,
        fontSize: 25,
        textAlign:'center',
        fontWeight:'bold'
    },
    choice: {
        fontSize: 20,
        fontFamily:'Times New Roman',
        bottom:120,
        fontWeight:'bold',
        textAlign:'center'
    }
});
export default five;