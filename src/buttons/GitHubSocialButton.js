import React from "react";
import SocialButton from "./SocialButton";

export default class GitHubSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/github.png")}
        backgroundColor={"#333"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with GitHub"}
      />
    )
  }
}