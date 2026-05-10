import { Stack } from "expo-router";

export default function authLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{
                headerShown: true,
                headerTransparent: true,
                headerBackTitle: "Back",
                headerTitle: "",
                headerTintColor: "#de1818",
                headerBackButtonMenuEnabled: false,
            }} />
        </Stack>
    )
}
