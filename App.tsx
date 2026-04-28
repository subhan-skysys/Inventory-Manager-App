import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  const [isReady, setIsReady] = useState(false)

  if (!isReady) {
    return <SplashScreen onReady={() => setIsReady(true)} />
  }

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})