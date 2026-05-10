import { PRIMARY_GREY_BG } from "@/constants/color";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY_GREY_BG }}>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="auth" />
      </Stack>
    </SafeAreaView>
  );
}