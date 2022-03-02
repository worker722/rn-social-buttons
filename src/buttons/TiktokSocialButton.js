import React from "react";
import SocialButton from "./SocialButton";

export default class TiktokSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/tiktok.png")}
        backgroundColor={"#010101"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with Tiktok"}
      />
    )
  }
}