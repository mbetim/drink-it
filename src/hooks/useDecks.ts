import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "react-query";
import { Deck } from "../@types/Deck";

const fetchDecks = async (): Promise<Deck[]> => {
  const decks = await AsyncStorage.getItem("decks");
  return decks ? JSON.parse(decks) : [];
};

export const useDecks = () => {
  return useQuery("decks", fetchDecks);
};
