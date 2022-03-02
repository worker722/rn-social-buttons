import React from "react";
import SocialButton from "./SocialButton";

export default class LinkedInSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/linkedin.png")}
        backgroundColor={"#4875B4"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with LinkedIn"}
      />
    )
  }
}