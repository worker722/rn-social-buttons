### React Native Social Buttons

![](https://img.shields.io/npm/dm/rn-social-buttons)
![](https://img.shields.io/npm/v/rn-social-buttons)
![](https://img.shields.io/github/contributors/worker722/rn-social-buttons)

<p>
<img src="https://github.com/worker722/rn-social-buttons/blob/main/preview.png?raw=true" />
</p>

## Installation

```bash
yarn add rn-social-buttons

or

npm install rn-social-buttons
```

## Basic Usage

```jsx
import React from "react";
import { View } from "react-native";
import {  
  FacebookSocialButton,
  AmazonSocialButton,
  LinkedInSocialButton,
  GoogleSocialButton,
  MicrosoftSocialButton,
  GitHubSocialButton,
  TwitterSocialButton,
  InstagramSocialButton,
  AppleSocialButton,
  OdnoklassnikiSocialButton,
  VkontakteSocialButton,
  TiktokSocialButton
} from "rn-social-buttons";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FacebookSocialButton
          onPress={() => {}} 
          buttonViewStyle={...} 
          logoStyle={...} 
          textStyle={...}
        />
      </View>
    );
  }
}
```

You can costumize the buttons using buttonViewStyle={...}, logoStyle={...} and textStyle={...}

## Custom Usage

```jsx
import React from "react";
import { View } from "react-native";
import { SocialButton } from "rn-social-buttons";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SocialButton
          iconSource={require("../images/icon.png")}
          backgroundColor={"#5181b8"}
          textColor={"#fff"}
          buttonText={"Sign in with Custom"}
          buttonViewStyle={...}
          onPress={...}
          logoStyle={...}
          textStyle={...}
        />
      </View>
    );
  }
}
```

## show Icon only

```jsx
import React from "react";
import { View } from "react-native";
import { FacebookSocialButton } from "rn-social-buttons";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <FacebookSocialButton 
          onPress={() => {}} 
          buttonViewStyle={...} 
          logoStyle={...} 
          textStyle={...}
          iconOnly={true}
          size={20}
        />
      </View>
    );
  }
}
```