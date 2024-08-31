import * as React from "react";
import { ViewStyle } from "react-native";
interface User {
  _id: number;
  name: string;
  avatar?: string | number;
}
interface Message {
  _id: number;
  text: string;
  createdAt: Date;
  user: User;
}
interface ChatProps {
  messages: Message[];
  setMessages: (message: string) => void;
  themeColor: string;
  themeTextColor: string;
  showSenderAvatar?: boolean;
  showReceiverAvatar?: boolean;
  placeholder?: string;
  inputBorderColor?: string;
  placeholderColor?: string;
  inputColor?: string;
  user: User;
  backgroundColor?: string;
  inputBackgroundColor?: string;
  backgroundImage?: string | number;
  senderMessageColor?: string;
  senderContainerColor?: string;
  customFooter?: React.ReactNode;
  style?: ViewStyle;
  showEmoji?: boolean;
  onPressEmoji?: () => any;
  showAttachment?: boolean;
  onPressAttachment?: () => any;
  timeContainerColor?: string;
  timeContainerTextColor?: string;
  onEndReached?: () => any;
}
export default function Chat({
  messages,
  setMessages,
  themeColor,
  themeTextColor,
  showSenderAvatar,
  showReceiverAvatar,
  placeholder,
  inputBorderColor,
  placeholderColor,
  inputColor,
  user,
  backgroundColor,
  inputBackgroundColor,
  backgroundImage,
  senderContainerColor,
  senderMessageColor,
  onEndReached,
}: ChatProps): React.JSX.Element;
