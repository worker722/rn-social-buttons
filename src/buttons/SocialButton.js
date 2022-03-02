import React from "react";
import { Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 42,
    borderRadius: 8,
    margin: 5,
  },
  imageIconStyle: {
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  textStyle: {
    marginLeft: 10,
    marginRight: 20
  }
});

export default class SocialButton extends React.Component {
  render() {
    const {
      iconSource, backgroundColor = "#fff", textColor = "#000",
      buttonViewStyle, onPress, logoStyle, textStyle, buttonText,
      iconOnly, size = 25,
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor }, buttonViewStyle]}
        onPress={onPress}
      >
        <Image
          source={iconSource}
          style={[styles.imageIconStyle, iconOnly && { width: size, height: size }, logoStyle]}
        />
        {!iconOnly &&
          <Text style={[styles.textStyle, { color: textColor }, textStyle]}>{buttonText}</Text>
        }
      </TouchableOpacity>
    );
  }
}
