import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { RootStackParamList } from "../../App";
import { Container } from "../components/Container";
import Constants from "expo-constants";
import { PlayingCard } from "../components/PlayingCard";

type GameProps = NativeStackScreenProps<RootStackParamList, "Game">;

export const Game: React.FC<GameProps> = ({ route }) => {
  const { deck } = route.params;
  const generateRandomNumber = () => Math.floor(Math.random() * deck.cards.length);

  const [generatedNumbers, setGeneratedNumbers] = useState([generateRandomNumber()]);
  const currentNumber = generatedNumbers[generatedNumbers.length - 1];

  return (
    <Container style={{ paddingTop: Constants.statusBarHeight }}>
      <TouchableWithoutFeedback
        onPress={() => setGeneratedNumbers((prev) => [...prev, generateRandomNumber()])}
      >
        <View className="flex-1">
          <Text className="text-center text-white text-2xl font-bold mt-4">
            Round: {generatedNumbers.length + 1}
          </Text>

          <View className="flex-1 justify-center items-center">
            <PlayingCard number={currentNumber + 1} />

            <Text className="mt-2 text-center text-xl text-white font-bold">
              {deck.cards[currentNumber].name}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};
