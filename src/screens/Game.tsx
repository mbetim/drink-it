import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Constants from "expo-constants";
import React, { useEffect, useRef, useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { RootStackParamList } from "../../App";
import { Deck } from "../@types/Deck";
import { Container } from "../components/Container";
import { PlayingCard } from "../components/PlayingCard";

type GameProps = NativeStackScreenProps<RootStackParamList, "Game">;

const useRandomNumber = (deck: Deck) => {
  const isFirstRender = useRef(true);

  const [generatedNumbers, setGeneratedNumbers] = useState<number[]>([]);
  const currentNumber = generatedNumbers[generatedNumbers.length - 1];

  const generateRandomNumber = (lastNumber?: number): number => {
    const newNumber = Math.floor(Math.random() * deck.cards.length);
    return lastNumber === newNumber ? generateRandomNumber(lastNumber) : newNumber;
  };

  const newNumber = () => {
    const newNumber = generateRandomNumber(currentNumber);
    setGeneratedNumbers((prev) => [...prev, newNumber]);
  };

  useEffect(() => {
    if (!isFirstRender.current) return;

    newNumber();
    isFirstRender.current = false;
  }, []);

  return { currentNumber, generatedNumbers, newNumber };
};

export const Game: React.FC<GameProps> = ({ route }) => {
  const { deck } = route.params;
  const { currentNumber, newNumber, generatedNumbers } = useRandomNumber(deck);

  return (
    <Container style={{ paddingTop: Constants.statusBarHeight }}>
      <TouchableWithoutFeedback onPress={() => newNumber()}>
        <View className="flex-1">
          <Text className="mt-4 text-center text-2xl font-bold text-white">
            Round: {generatedNumbers.length}
          </Text>

          <View className="flex-1 items-center justify-center">
            <PlayingCard number={currentNumber + 1} />

            <Text className="mt-2 text-center text-xl font-bold text-white">
              {deck.cards[currentNumber]?.name}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Container>
  );
};
