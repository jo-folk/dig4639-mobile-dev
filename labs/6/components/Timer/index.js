import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Button} from 'react-native-elements'


const styles = StyleSheet.create({

    timer: {
        width: 400,
        padding: 10,
        margin: "auto"
    },
    timerText: {
        fontSize: 35,
        fontWeight: "bold",
        fontFamily: "ITrebuchet MS",
        paddingTop: 60,
        textAlign: 'center',
    }
})
class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
      this.tick = this.tick.bind(this); 
    }
  
    tick() {
      this.interval = setInterval(() => {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
        return (
        <View>
            <Text style={styles.timerText}>Time: {this.state.seconds}</Text>
            <Button style={styles.timer} title="Start Timer"  onPress={this.tick}></Button>
        </View>
        

        );
      }
}
export default Timer;
  
  