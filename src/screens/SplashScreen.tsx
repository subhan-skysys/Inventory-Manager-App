import React, { useEffect, useRef } from 'react'
import { View, Animated, StyleSheet, Dimensions } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

type Props = {
  onReady: () => void
}

const { width, height } = Dimensions.get('window')

const SplashScreen = ({ onReady }: Props) => {
  const logoOpacity = useRef(new Animated.Value(1)).current
  const logoScale = useRef(new Animated.Value(1)).current
  const bgOpacity = useRef(new Animated.Value(0)).current

  useEffect(() => {
    async function prepare() {
      setTimeout(async () => {
        await RNBootSplash.hide({ fade: true })
      }, 100)

      setTimeout(() => {
        Animated.timing(bgOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start()
      }, 300)

      Animated.sequence([
        Animated.delay(500),
        Animated.spring(logoScale, {
          toValue: 1.05,
          friction: 4,
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 4,
          useNativeDriver: true,
        }),
      ]).start()

      setTimeout(() => {
        onReady()
      }, 2500)
    }

    prepare()
  }, [onReady, logoScale, bgOpacity])

  return (
    <View style={styles.container}>
      {/* ✅ PNG Background instead of fake patterns */}
      <Animated.Image
        source={require('../../assets/images/splash-screen-bg.png')}
        style={[
          StyleSheet.absoluteFill,
          { opacity: bgOpacity }
        ]}
        resizeMode="cover"
        width={width}
        height={height}
      />

      {/* Centered Logo */}
      <Animated.Image
        source={require('../../assets/Logo.png')}
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
        resizeMode="contain"
      />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logo: {
    width: width * 0.5,
    height: width * 0.25,
    zIndex: 10,
  },
})