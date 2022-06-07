import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  interpolate,
} from 'react-native-reanimated'
import { useEffect } from 'react'

export default function AnimationCard({ title, delay }) {
  const navigation = useNavigation()

  const opacity = useSharedValue(0)
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [
      { translateX: interpolate(opacity.value, [0, 1], [-300, 0]) },
      { scale: interpolate(opacity.value, [0, 1], [0.25, 1]) },
    ],
  }))

  useEffect(() => {
    opacity.value = withDelay(
      delay * 100,
      withTiming(1, {
        duration: 300,
      })
    )
  }, [])

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        style={styles.square}
        onPress={() => navigation.navigate(title)}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  square: {
    width: '100%',
    height: 80,
    backgroundColor: 'slateblue',
    borderRadius: 8,
    marginBottom: 24,
  },
})
