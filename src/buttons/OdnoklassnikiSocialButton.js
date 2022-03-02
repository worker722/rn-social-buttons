import React from "react";
import SocialButton from "./SocialButton";

export default class OdnoklassnikiSocialButton extends React.Component {
  render() {
    return (
      <SocialButton
        {...this.props}
        iconSource={require("../images/ok.png")}
        backgroundColor={"#f58220"}
        textColor={"#fff"}
        buttonText={this.props.buttonText || "Sign in with Odnoklassniki"}
      />
    )
  }
}