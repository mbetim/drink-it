import { Entypo } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Text } from "react-native";
import colors from "tailwindcss/colors";
import { RootStackParamList } from "../../App";
import { Container } from "../components/Container";

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Decks");
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Container className="justify-center items-center">
      <Entypo name="drink" size={100} color={colors.white} />

      <Text className="font-bold font-lg text-primary-contrast text-6xl mt-8">Drink it!</Text>
    </Container>
  );
};
