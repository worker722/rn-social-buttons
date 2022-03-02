import React from "react";
import SocialButton from "./SocialButton";

export default class TwitterSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/twitter.png")}
        backgroundColor={"#00acee"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with Twitter"}
      />
    )
  }
}