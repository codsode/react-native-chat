import * as React from "react";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  ListRenderItem,
  FlatList as FlatListType,
} from "react-native";
import images from "./assets/images/index";

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
}

function Chat({
  messages,
  setMessages,
  themeColor,
  themeTextColor,
  showSenderAvatar = true,
  showReceiverAvatar = true,
  placeholder = "Write Your Message...",
  inputBorderColor = "gray",
  placeholderColor = "gray",
  inputColor = "black",
  user,
  backgroundColor = "white",
  inputBackgroundColor = "white",
  backgroundImage,
  senderContainerColor = "#f0ebfb",
  senderMessageColor = "#000000",
}: ChatProps) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor,
    },
    contentContainerStyle: {
      flexGrow: 1,
      justifyContent: "flex-end",
    },
    footer: {
      padding: 10,
    },
    footerContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      borderWidth: 1,
      paddingHorizontal: 12,
      paddingVertical: 10,
      borderRadius: 120,
      borderColor: inputBorderColor,
      backgroundColor: inputBackgroundColor,
    },
    inputStyle: {
      flex: 1,
      paddingHorizontal: 10,
      color: inputColor,
    },
    sendContainer: {
      width: 35,
      height: 35,
      borderRadius: 35,
      backgroundColor: themeColor,
      justifyContent: "center",
      alignItems: "center",
    },
    sendImage: {
      tintColor: themeTextColor,
      width: 20,
      height: 20,
    },
    messageWrapper: {
      paddingHorizontal: 20,
      paddingVertical: 5,
    },
    alignEnd: {
      justifyContent: "flex-end",
      flexDirection: "row",
      gap: 5,
    },
    alignStart: {
      justifyContent: "flex-start",
      flexDirection: "row",
      gap: 5,
    },
    senderMessageContainer: {
      backgroundColor: themeColor,
      paddingHorizontal: 20,
      paddingVertical: 15,
      maxWidth: "80%",
      borderRadius: 20,
      borderTopEndRadius: 0,
      elevation: 1,
    },
    receiverMessageContainer: {
      backgroundColor: senderContainerColor,
      paddingHorizontal: 20,
      paddingVertical: 15,
      maxWidth: "80%",
      borderRadius: 20,
      borderTopStartRadius: 0,
      elevation: 1,
    },
    messageText: {
      fontSize: 14,
      fontWeight: "600",
      color: senderMessageColor,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    avatarContainer: {
      backgroundColor: senderContainerColor,
      width: 40,
      height: 40,
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      elevation: 1,
    },
    avatarContainerText: {
      fontSize: 14,
      fontWeight: "600",
      color: senderMessageColor,
    },
  });

  const [text, setText] = useState<string>("");
  const flatListRef = useRef<FlatListType<Message>>(null);

  useEffect(() => {
    scrollToEnd();
  }, [messages]);

  const getInitials = (fullName: string): string => {
    const names = fullName.trim().split(" ");
    return names.length === 1
      ? names[0].charAt(0).toUpperCase()
      : `${names[0].charAt(0).toUpperCase()}${names[names.length - 1]
          .charAt(0)
          .toUpperCase()}`;
  };

  const Avatar = ({ icon }: { icon: string | number }) => (
    <Image
      source={typeof icon === "string" ? { uri: icon } : icon}
      style={styles.avatar}
      resizeMode="contain"
    />
  );

  const SendMessageContainer = ({
    message,
    name,
    icon,
  }: {
    message: string;
    name: string;
    icon?: string | number;
  }) => (
    <View style={styles.alignEnd}>
      <TouchableOpacity
        style={styles.senderMessageContainer}
        activeOpacity={0.8}
      >
        <Text style={[styles.messageText, { color: themeTextColor }]}>
          {message}
        </Text>
      </TouchableOpacity>
      {showSenderAvatar && (
        <View style={[styles.avatarContainer, { backgroundColor: themeColor }]}>
          {icon ? (
            <Avatar icon={icon} />
          ) : (
            <Text
              style={[styles.avatarContainerText, { color: themeTextColor }]}
            >
              {getInitials(name)}
            </Text>
          )}
        </View>
      )}
    </View>
  );

  const ReceivedMessageContainer = ({
    message,
    name,
    icon,
  }: {
    message: string;
    name: string;
    icon?: string | number;
  }) => (
    <View style={styles.alignStart}>
      {showReceiverAvatar && (
        <View style={styles.avatarContainer}>
          {icon ? (
            <Avatar icon={icon} />
          ) : (
            <Text style={styles.avatarContainerText}>{getInitials(name)}</Text>
          )}
        </View>
      )}
      <TouchableOpacity
        style={styles.receiverMessageContainer}
        activeOpacity={0.8}
      >
        <Text style={styles.messageText}>{message}</Text>
      </TouchableOpacity>
    </View>
  );

  const messageRenderItem: ListRenderItem<Message> = ({
    item,
  }: {
    item: any;
  }) => (
    <View style={styles.messageWrapper}>
      {item.user._id === user._id ? (
        <SendMessageContainer
          message={item.text}
          name={item.user.name}
          icon={item.user.avatar}
        />
      ) : (
        <ReceivedMessageContainer
          message={item.text}
          name={item.user.name}
          icon={item.user.avatar}
        />
      )}
    </View>
  );

  const onSendMessage = () => {
    if (text.trim()) {
      setMessages(text.trim());
      setText("");
    }
  };

  const handleKeyPress = () => {
    onSendMessage();
  };

  const scrollToEnd = () => {
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const BackgroundView: any = backgroundImage ? ImageBackground : View;

  return (
    <BackgroundView
      style={styles.container}
      source={
        typeof backgroundImage === "string"
          ? { uri: backgroundImage }
          : backgroundImage
      }
      resizeMode="cover"
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={messageRenderItem}
        contentContainerStyle={styles.contentContainerStyle}
        onContentSizeChange={scrollToEnd}
        keyExtractor={(_, index) => index?.toString()}
      />
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <TextInput
            placeholder={placeholder}
            value={text}
            onChangeText={setText}
            style={styles.inputStyle}
            onSubmitEditing={handleKeyPress}
            blurOnSubmit={false}
            placeholderTextColor={placeholderColor}
            multiline
          />
          <TouchableOpacity
            style={styles.sendContainer}
            onPress={onSendMessage}
          >
            <Image
              source={images.send}
              style={styles.sendImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundView>
  );
}

export default Chat;
