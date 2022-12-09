import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Decks } from "./src/screens/Decks";
import { Home } from "./src/screens/Home";

export type RootStackParamList = {
  Home: undefined;
  Decks: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Decks" component={Decks} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
