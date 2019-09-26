import React from "react";
import { Button } from "reactstrap";
import "./style.css";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.onHover = this.onHover.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);

    this.state = {
      isMouseOver: false
    };
  }
  onHover() {
    this.setState({
      isMouseOver: true
    });
  }
  onMouseOut() {
    this.setState({
      isMouseOver: false
    });
  }
  render() {
    return (
      <wired-card
        elevation="2"
        onMouseOver={this.onHover}
        onMouseOut={this.onMouseOut}
      >
        {!this.state.isMouseOver ? (
          <img src={this.props.data.img} />
        ) : (
          <div className="onHover">
            <h5>
              <strong>{this.props.data.name}</strong>
            </h5>
            <p>{this.props.data.description} </p>

            <Button
              outline
              color="dark"
              href={this.props.data.link}
              target="_blank"
            >
              {" "}
              <strong>{this.props.data.message}</strong>{" "}
            </Button>
          </div>
        )}
      </wired-card>
    );
  }
}
