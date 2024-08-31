# @codsod/react-native-chat

[<img src="https://github.com/codsode/react-native-chat/blob/master/images/react-native-chat.png">](https://github.com/codsode/react-native-chat/blob/master/images/react-native-chat.png)

A simple and customizable React Native chat component for creating chat interfaces easily. This package provides flexibility and simplicity, with customizable themes and layouts, making it ideal for mobile applications.

## Features

- Easy-to-use API
- Customizable themes and styles
- Supports avatars, custom backgrounds, and placeholders
- Optimized for mobile devices
- Flexible message management

## Installation

To install the package, use npm or yarn:

```bash
npm install @codsod/react-native-chat
```

## Complete Example:

```javascript
import React, { useEffect, useState } from "react";
import Chat from "@codsod/react-native-chat";

const Home = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hey!",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "CodSod",
        },
      },
      {
        _id: 2,
        text: "Hello CodSod",
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Vishal Chaturvedi",
        },
      },
    ]);
  }, []);

  const onSendMessage = (text) => {
    setMessages((prevMessages: any) => [
      {
        _id: prevMessages.length + 1,
        text,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Vishu Chaturvedi",
        },
      },
      ...prevMessages,
    ]);
  };

  return (
    <Chat
      messages={messages}
      setMessages={(val) => onSendMessage(val)}
      themeColor="orange"
      themeTextColor="white"
      showSenderAvatar={false}
      showReceiverAvatar={true}
      inputBorderColor="orange"
      user={{
        _id: 1,
        name: "Vishal Chaturvedi",
      }}
      backgroundColor="white"
      inputBackgroundColor="white"
      placeholder="Enter Your Message"
      placeholderColor="gray"
      backgroundImage={
        "https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g"
      }
      showEmoji={true}
      onPressEmoji={() => console.log("Emoji Button Pressed..")}
      showAttachment={true}
      onPressAttachment={() => console.log("Attachment Button Pressed..")}
      timeContainerColor="red"
      timeContainerTextColor="white"
      onEndReached={() => alert("You have reached the end of the page")}
    />
  );
};

export default Home;
```

## Props

| Prop                     | Type       | Description                                                                                      | Default                |
| ------------------------ | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------- |
| `messages`               | `Array`    | An array of message objects. Each message should include `_id`, `text`, `createdAt`, and `user`. | `[]`                   |
| `setMessages`            | `Function` | A callback function for sending new messages. This function should update the `messages` state.  | -                      |
| `themeColor`             | `string`   | The primary color for the chat interface, including buttons, icons, and message bubbles.         | `"orange"`             |
| `themeTextColor`         | `string`   | The color of the text within the chat interface elements.                                        | `"white"`              |
| `showSenderAvatar`       | `boolean`  | Whether to display the sender's avatar alongside their messages.                                 | `false`                |
| `showReceiverAvatar`     | `boolean`  | Whether to display the receiver's avatar alongside their messages.                               | `true`                 |
| `inputBorderColor`       | `string`   | The border color of the input field where users type their messages.                             | `"orange"`             |
| `user`                   | `Object`   | The current user object, which should include `_id` and `name`.                                  | -                      |
| `backgroundColor`        | `string`   | The background color of the chat interface.                                                      | `"white"`              |
| `inputBackgroundColor`   | `string`   | The background color of the input field where users type their messages.                         | `"white"`              |
| `placeholder`            | `string`   | The placeholder text displayed in the input field when it is empty.                              | `"Enter Your Message"` |
| `placeholderColor`       | `string`   | The color of the placeholder text.                                                               | `"gray"`               |
| `backgroundImage`        | `string`   | The URL of an image to be used as the background of the chat interface.                          | `undefined`            |
| `showEmoji`              | `boolean`  | Whether to show the emoji button.                                                                | `false`                |
| `onPressEmoji`           | `Function` | A function that defines the action to perform when the emoji button is clicked.                  | -                      |
| `showAttachment`         | `boolean`  | Whether to show the attachment button.                                                           | `false`                |
| `onPressAttachment`      | `Function` | A function that defines the action to perform when the attachment button is clicked.             | -                      |
| `timeContainerColor`     | `string`   | To set the background color of top time status color default color is theme color.               | `themeColor`           |
| `timeContainerTextColor` | `string`   | To set the text color of top time status, default color is theme text color.                     | `themeTextColor`       |
| `onEndReached`           | `Function` | This function is used for using pagination function.                                             | -                      |

This `README.md` file includes all the necessary details about the `Chat` component, including parameters and example code for usage. Feel free to modify it according to your needs or preferences!
