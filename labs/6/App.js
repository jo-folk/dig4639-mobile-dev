import React from 'react'
import {StyleSheet, View} from 'react-native'
import Quiz from './components/Quiz'


const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#B7FFD8',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.app}>
        <Quiz/>
      </View>
    )
  }
}
 
