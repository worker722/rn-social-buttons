import React from "react";
import SocialButton from "./SocialButton";

export default class MicrosoftSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/microsoft.png")}
        backgroundColor={"#0078d7"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with Microsoft"}
      />
    )
  }
}