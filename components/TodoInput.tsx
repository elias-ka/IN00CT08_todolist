import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";
import { SaveButton } from ".";

export interface TodoInputProps {
  text: string;
  onChangeText: (text: string) => void;
  onPressSave: () => void;
}

export function TodoInput({ text, onChangeText, onPressSave }: TodoInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder="Enter task"
        multiline={false}
      />
      <SaveButton onPress={onPressSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    fontSize: 20,
    marginRight: 8,
  },
});
