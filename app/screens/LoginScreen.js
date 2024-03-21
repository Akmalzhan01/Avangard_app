import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import home from "../../assets/images/home.png";
import GoogleIcon from "../../assets/images/Google.png";
import colors from "../utils/colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();
export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        source={home}
        style={{ width: 250, height: 500, objectFit: "contain", marginTop: 70 }}
      />
      <View
        style={{
          height: 400,
          backgroundColor: colors.PRIMARY,
          width: "100%",
          marginTop: -100,
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            color: colors.WHITE,
            fontFamily: "outfit-bold",
            marginTop: 30,
          }}
        >
          Codebox
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            marginTop: 20,
            color: colors.LIGHT_PRIMARY,
            fontFamily: "outfit-regular",
            paddingHorizontal: 15,
          }}
        >
          Your unlimate Programming Learning box
        </Text>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: colors.WHITE,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            padding: 10,
            borderRadius: 99,
            marginTop: 25,
          }}
        >
          <Image source={GoogleIcon} style={{ width: 40, height: 40 }} />
          <Text
            style={{
              fontSize: 20,
              color: colors.PRIMARY,
              fontFamily: "outfit-regular",
            }}
          >
            Sign in with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
