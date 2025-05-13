import {NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={HomeScreen}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
}
