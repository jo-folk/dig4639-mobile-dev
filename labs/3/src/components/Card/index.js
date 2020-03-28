import React from "react";
import './index.css';

class Card extends React.Component {
    render() {
        return (
            <p className="card">{this.props.content}</p>
        );
    }
}

export default Card;