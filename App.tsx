import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import LiquidBackground from './src/components/LiquidBackground';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <LiquidBackground />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
