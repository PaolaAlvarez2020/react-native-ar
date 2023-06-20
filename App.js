import { LogBox } from "react-native";
import { AuthProvider } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { AuthNavigation } from "./src/navigation/AuthNavigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-get-random-values";
import "react-native-gesture-handler";
import { PRIMARY_DARK } from "./src/styles/colors";

LogBox.ignoreAllLogs();

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: PRIMARY_DARK }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),

  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </AuthProvider>
  );
}
