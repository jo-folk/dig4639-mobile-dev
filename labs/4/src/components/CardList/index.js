import React from 'react';
import data from './data.json';
import Card from '../Card';

class CardList extends React.Component{

  constructor(props){
    super(props);
      this.state = { 
        cards : data.cards.map((v, i) => {
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
      <Card key={v.id} clicked={() => this.clicked(v.id)} id={v.id} 
        content={v.content} title={v.title}></Card>
      )
      );
  }
}
export default CardList;
