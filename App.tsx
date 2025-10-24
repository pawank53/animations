/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import MoveLeft from './src/components/MoveLeft';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ServerDrivenUI from './src/SDUI/ui/ServerDrivenUI';
import {hotels} from './src/SDUI/jSON/hotel';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* <MoveLeft /> */}
      <ServerDrivenUI jsonData={hotels}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent:'center',
    // alignItems:'center',
    marginHorizontal: 10,
  },
});

export default App;
