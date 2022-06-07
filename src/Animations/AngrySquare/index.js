import { View, StyleSheet } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  withSpring,
  interpolate,
  interpolateColor,
} from 'react-native-reanimated'

import getDistance from '../../utils/getDistance'

export default function AngrySquare() {
  const posX = useSharedValue(0)
  const posY = useSharedValue(0)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: posX.value },
      { translateY: posY.value },
      {
        rotate: getDistance(posX.value, posY.value) + 'deg',
      },
    ],
    backgroundColor: interpolateColor(
      getDistance(posX.value, posY.value),
      [0, 150, 300],
      ['#996a5a', '#16e04c', '#cc0eb9']
    ),
    width: interpolate(
      getDistance(posX.value, posY.value),
      [0, 300],
      [30, 100]
    ),
  }))

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (e) => {
      const x = e.translationX
      const y = e.translationY
      posX.value = x * (1 / 2)
      posY.value = y * (1 / 2)
    },
    onEnd: () => {
      posX.value = withSpring(0)
      posY.value = withSpring(0)
    },
  })

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[animatedStyle, styles.ball]} />
      </PanGestureHandler>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    aspectRatio: 1,
    borderRadius: 10,
  },
})
