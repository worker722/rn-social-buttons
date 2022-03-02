import React from "react";
import SocialButton from "./SocialButton";

export default class AppleSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/apple.png")}
        backgroundColor={"#000"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with Apple"}
      />
    )
  }
}
