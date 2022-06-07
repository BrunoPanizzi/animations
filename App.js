import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Navigation from './src/Navigation'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar animated barStyle="dark-content" backgroundColor="#ddd" />
      <Navigation />
    </GestureHandlerRootView>
  )
}
