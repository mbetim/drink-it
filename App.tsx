import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "react-query";
import { Deck } from "./src/@types/Deck";
import { Decks } from "./src/screens/Decks";
import { Game } from "./src/screens/Game";
import { Home } from "./src/screens/Home";

export type RootStackParamList = {
  Home: undefined;
  Decks: undefined;
  Game: { deck: Deck };
};

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

          <Stack.Screen name="Decks" component={Decks} options={{ headerShown: false }} />

          <Stack.Screen name="Game" component={Game} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
