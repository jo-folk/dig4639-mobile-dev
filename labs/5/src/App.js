
import React from 'react';
import { View } from 'react-native';
import WeatherCardList from './components/WeatherCardList';



 class App extends React.Component {
  render() {
    return (
      <View>
        <WeatherCardList />
      </View>
    );
  }
}

export default App;
