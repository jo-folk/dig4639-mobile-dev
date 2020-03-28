import React from 'react';
import {View, StyleSheet} from "react-native";
import WeatherCard from '../WeatherCard';
import Weather from '../Weather';

class WeatherCardList extends React.Component{

  constructor(props){
    super(props);
      this.state = { 
        cards : Weather.cards.map((v, i) => {
          v.id = i;
          return v;
        }),
      }
  }

  clicked(id) {
    let cards = this.state.cards.filter((v) => v.id !== id);
    this.setState ({cards: cards});
  }

  render(){
    return (
      this.state.cards.map((v, i) => 
      <WeatherCard key={v.id} clicked={() => this.clicked(v.id)} id={v.id} ></WeatherCard>
      )
      );
  }
}
export default WeatherCardList;