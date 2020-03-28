import React from 'react';
import {View, StyleSheet} from "react-native";
import Weather from '../Weather';

const styles = StyleSheet.create({
    card: {
        
    },
    close: {
    
    }
});

class WeatherCard extends React.Component {
    render() {
        return (
            <View style = {styles.card}>
                <View style={styles.close} onClick={() => this.props.clicked()}>x</View>
                <Weather></Weather>
            </View>
        );
    }
}

export default WeatherCard;