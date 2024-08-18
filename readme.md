# @codsod/react-native-chat

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
  const [messages, setMessages] = useState < any > [];

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

  const onSendMessage = (text: string) => {
    if (text.trim().length === 0) return;

    setMessages((prevMessages: any) => [
      ...prevMessages,
      {
        _id: prevMessages.length + 1,
        text,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: "Vishu Chaturvedi",
        },
      },
    ]);
  };

  return (
    <Chat
      messages={messages}
      setMessages={(val: string) => onSendMessage(val)}
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
      backgroundImage={"https://picsum.photos/seed/picsum/200/300"}
    />
  );
};

export default Home;
```

## Props

| Prop                   | Type       | Description                                                                                      | Default                |
| ---------------------- | ---------- | ------------------------------------------------------------------------------------------------ | ---------------------- |
| `messages`             | `Array`    | An array of message objects. Each message should contain `_id`, `text`, `createdAt`, and `user`. | `[]`                   |
| `setMessages`          | `Function` | Callback function to handle sending new messages. Should update the `messages` state.            | -                      |
| `themeColor`           | `string`   | The primary color of the chat interface (e.g., buttons, icons, message bubbles).                 | `"orange"`             |
| `themeTextColor`       | `string`   | The color of the text for elements within the chat interface.                                    | `"white"`              |
| `showSenderAvatar`     | `boolean`  | Whether to show the avatar of the sender alongside their messages.                               | `false`                |
| `showReceiverAvatar`   | `boolean`  | Whether to show the avatar of the receiver alongside their messages.                             | `true`                 |
| `inputBorderColor`     | `string`   | The border color of the input field where users type their messages.                             | `"orange"`             |
| `user`                 | `Object`   | The current user object, containing `_id` and `name`.                                            | -                      |
| `backgroundColor`      | `string`   | The background color of the chat interface.                                                      | `"white"`              |
| `inputBackgroundColor` | `string`   | The background color of the input field where users type their messages.                         | `"white"`              |
| `placeholder`          | `string`   | The placeholder text displayed in the input field when it is empty.                              | `"Enter Your Message"` |
| `placeholderColor`     | `string`   | The color of the placeholder text.                                                               | `"gray"`               |
| `backgroundImage`      | `string`   | The URL of an image to use as the background of the chat interface.                              | `undefined`            |

This `README.md` file includes all the necessary details about the `Chat` component, including parameters and example code for usage. Feel free to modify it according to your needs or preferences!
