import { useFonts } from "expo-font";
import LoginScreen from "./app/screens/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigations from "./app/navigations/tabNavigations";
import {View, StyleSheet} from "react-native"


export default function App() {
  const [fontsLoaded] = useFonts({
    "outfit-light": require("./assets/fonts/Outfit-Light.ttf"),
    "outfit-regular": require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <ClerkProvider publishableKey="pk_test_ZGlyZWN0LWRvZS0yMC5jbGVyay5hY2NvdW50cy5kZXYk">
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigations />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})