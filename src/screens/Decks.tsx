import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import React from "react";
import { Text } from "react-native";
import { RootStackParamList } from "../../App";
import { Container } from "../components/Container";

type DecksProps = NativeStackScreenProps<RootStackParamList, "Decks">;

export const Decks: React.FC<DecksProps> = ({ navigation }) => {
  return (
    <Container style={{ paddingTop: Constants.statusBarHeight }}>
      <Text className="text-primary-contrast text-2xl text-center mt-8">Decks</Text>
    </Container>
  );
};
