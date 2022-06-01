import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Animations from '../Animations'

import Home from './Home'

const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        {Animations.map(({ component, title }, id) => (
          <Stack.Screen name={title} component={component} key={id} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
