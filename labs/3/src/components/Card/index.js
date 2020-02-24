import React from "react";

class Card extends React.Component {
    render() {
        return (
            <p className="card">{this.props.content}</p>
        );
    }
}

export default Card;