import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Deck } from "../@types/Deck";

interface DeckListItemProps {
  deck: Deck;
  onPress: () => void;
}

export const DeckListItem: React.FC<DeckListItemProps> = ({ deck, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View className="rounded bg-white shadow-sm my-2 p-2">
      <Text className="text-lg text-primary-dark">{deck.name}</Text>
      <Text className="font-light text-primary-light">{deck.cards.length} cards</Text>
    </View>
  </TouchableWithoutFeedback>
);
