import { Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Animations from '../Animations'

export default function Home({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello, see cool animations down there:</Text>

      {Animations.map(({ title }, id) => (
        <TouchableOpacity
          key={id}
          style={styles.square}
          onPress={() => navigation.navigate(title)}
        >
          <Text>{title}</Text>
        </TouchableOpacity>
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
  square: {
    width: '100%',
    height: 80,
    backgroundColor: 'slateblue',
    borderRadius: 8,
    marginBottom: 24,
  },
})
