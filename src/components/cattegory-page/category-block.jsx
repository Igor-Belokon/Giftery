import { Button } from "antd";
import { Component } from "react";

export default class CategoryButton extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={this.props.onClick}
          className="button_style"
          style={{
            backgroundColor: "#FA6400",
            border: "2px solid #FA6400",
            borderRadius: "15px",
          }}
          id={this.props.categorie.id}
          type="primary"
          size={"size"}
        >
          {this.props.categorie.title}
        </Button>
      </div>
    );
  }
}
