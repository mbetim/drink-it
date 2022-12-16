import { Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text } from "react-native";
import colors from "tailwindcss/colors";
import { RootStackParamList } from "../../App";
import { Container } from "../components/Container";
import { defaultDecks } from "../utils/defaultDecks";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

const createDefaultDeckIfRequired = async () => {
  const decks = await AsyncStorage.getItem("decks");

  if (decks) return;

  await AsyncStorage.setItem("decks", JSON.stringify([defaultDecks]));
};

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    createDefaultDeckIfRequired().then(() => {
      timeout = setTimeout(() => {
        navigation.replace("Decks");
      }, 1500);
    });

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container className="items-center justify-center">
      <Entypo name="drink" size={100} color={colors.white} />

      <Text className="mt-8 text-6xl font-bold text-primary-contrast">Drink it!</Text>
    </Container>
  );
};
