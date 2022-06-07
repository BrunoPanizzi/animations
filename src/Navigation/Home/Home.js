import { Text, ScrollView, StyleSheet } from 'react-native'

import Animations from '../../Animations'

import AnimationCard from './AnimtationCard'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello, see cool animations down there:</Text>

      {Animations.map(({ title }, id) => (
        <AnimationCard key={id} title={title} delay={id} />
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 32,
  },
})
