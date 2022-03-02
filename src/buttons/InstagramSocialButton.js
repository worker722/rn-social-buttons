import React from "react";
import SocialButton from "./SocialButton";

export default class InstagramSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/instagram.png")}
        backgroundColor={"#fff"}
        textColor={"#575757"}
        buttonText={this.props.buttonText || "Sign in with Instagram"}
      />
    )
  }
}