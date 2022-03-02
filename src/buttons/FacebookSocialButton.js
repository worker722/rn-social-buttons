import React from "react";
import SocialButton from "./SocialButton";

export default class FacebookSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/facebook.png")}
        backgroundColor={"#485a96"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with Facebook"}
      />
    )
  }
}