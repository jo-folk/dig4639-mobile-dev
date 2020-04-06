import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Button} from 'react-native-elements'
import questions from './questions.json'
import Timer from'../Timer'


const TITLE_STATE = 0
const QUESTION_STATE = 1

const styles = StyleSheet.create({

    button: {
        width: 400,
        padding: 10,
        margin: "auto"
    },
    text: {
        fontSize: 35,
        fontWeight: "bold",
        fontFamily: "ITrebuchet MS",
        padding: 15,
        textAlign: 'center',
    }
})

export default class Quiz extends React.Component {

  constructor(props) {
    super()
    this.state = {
      currentState: TITLE_STATE,
      counter: 0,
      currentQuestion: 0
    }
  }

  nextQuestion(x) {
    if (x.correct){
      this.setState({counter: this.state.counter + 1})
    }
      this.setState({currentQuestion: this.state.currentQuestion + 1})
    }


  render () {
    return (
      <View>
        {(this.state.currentState === TITLE_STATE) ? 

            <View>
                <Text style={styles.text}>How Much do you know about Jo???</Text>
                <Button 
                style={styles.button} 
                title="Begin" 
                onPress={ () => this.setState({ currentState: QUESTION_STATE })}
                />
            </View>
          : (this.state.currentQuestion < questions.length) ? 
            <View>
              <Text style={styles.text}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button style={styles.button} title={ans.text} key={i} onPress={() => this.nextQuestion(ans)} />
                })}
              </View>
              <Timer tyle={styles.text}/>
            </View>

          : 
            
            <View>
              <Text style={styles.text}>Done!</Text>
              <Text style={styles.text}>Score: {this.state.counter}/{questions.length}</Text>
              <Button style={styles.button} title="Try Again?" onPress={() => this.setState({ currentState: TITLE_STATE, currentQuestion: 0, counter: 0 })}/>
            </View>
        }
      </View>
    )
  }
}