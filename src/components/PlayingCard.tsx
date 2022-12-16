import React from "react";
import { Text, View } from "react-native";

interface PlayingCardProps {
  number: number;
}

const shortNumberClasses = "text-[20px] font-bold text-primary-default";

export const PlayingCard: React.FC<PlayingCardProps> = ({ number }) => {
  return (
    <View
      className="w-[65%] bg-primary-contrast rounded px-4 py-2 justify-between"
      style={{ elevation: 8 }}
    >
      <Text className={shortNumberClasses}>{number}</Text>

      <Text className="text-center text-[200px] text-primary-default font-bold">{number}</Text>

      <Text className={shortNumberClasses} style={{ transform: [{ rotate: "180deg" }] }}>
        {number}
      </Text>
    </View>
  );
};
