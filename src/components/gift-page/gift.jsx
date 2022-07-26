import { Card } from "antd";
import { Component } from "react";
import "antd/dist/antd.css";
import "./style.css";
const { Meta } = Card;

export default class GiftButton extends Component {
  render() {
    console.log(this.props.gift);
    return (
      <div>
        <Card
          hoverable
          style={{
            width: 240,
            backgroundColor: "#FA6400",
            marginTop: "10px",
            border: "5px solid #FA6400",
            borderRadius: "5px",
          }}
          cover={<img alt="example" src={this.props.gift.main_image.small} />}
        >
          <Meta title={this.props.gift.title} description="www.instagram.com" />
        </Card>
      </div>
    );
  }
}
