import React from "react";
import SocialButton from "./SocialButton";

export default class AmazonSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/amazon.png")}
        backgroundColor={"#FF9B00"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with Amazon"}
      />
    )
  }
}