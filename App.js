import { useCallback } from "react";
import "react-native-get-random-values";
import "react-native-gesture-handler";
import { AuthProvider } from "./src/context";
import { AuthNavigation } from "./src/navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { LogBox, View, Text } from "react-native";
import { toastConfig } from "./src/utils";
import { FONT_NAMES } from "./src/styles/fonts";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);
LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(FONT_NAMES);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <View
          style={{ width: "100%", height: "100%" }}
          onLayout={onLayoutRootView}
        >
          <AuthNavigation />
        </View>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </AuthProvider>
  );
}
