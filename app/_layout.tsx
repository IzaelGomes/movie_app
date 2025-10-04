import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen
          name="movie/[id]"
          options={{ headerShown: false, animation: 'fade' }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
