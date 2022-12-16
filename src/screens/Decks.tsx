import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import React from "react";
import { FlatList, Text } from "react-native";
import { RootStackParamList } from "../../App";
import { Container } from "../components/Container";
import { DeckListItem } from "../components/DeckListItem";
import { useDecks } from "../hooks/useDecks";

type DecksProps = NativeStackScreenProps<RootStackParamList, "Decks">;

export const Decks: React.FC<DecksProps> = ({ navigation }) => {
  const { data: decks } = useDecks();

  return (
    <Container style={{ paddingTop: Constants.statusBarHeight }}>
      <Text className="mt-8 text-center text-2xl text-primary-contrast">Decks</Text>

      <FlatList
        data={decks}
        renderItem={({ item }) => (
          <DeckListItem deck={item} onPress={() => navigation.push("Game", { deck: item })} />
        )}
      />
    </Container>
  );
};
