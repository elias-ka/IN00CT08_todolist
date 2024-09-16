import { View } from "react-native";
import { Pressable, Text } from "react-native";

export function SaveButton({ onPress }: { onPress: () => void }) {
  return (
    <View
      style={{
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <Pressable
        style={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 12,
          paddingHorizontal: 24,
        }}
        onPress={onPress}
        android_ripple={{ color: "0xfff" }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Save
        </Text>
      </Pressable>
    </View>
  );
}
