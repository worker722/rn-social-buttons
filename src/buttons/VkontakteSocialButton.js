import React from "react";
import SocialButton from "./SocialButton";

export default class TwitterSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/vk.png")}
        backgroundColor={"#5181b8"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with Vkontakte"}
      />
    )
  }
}