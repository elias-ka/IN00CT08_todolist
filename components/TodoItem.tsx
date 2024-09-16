import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
import { Todo } from "../types";

export interface TodoItemProps extends PressableProps {
  todo: Todo;
  onTodoPress: (todo: Todo) => void;
}

export function TodoItem({ todo, onTodoPress, ...rest }: TodoItemProps) {
  return (
    <Pressable onPress={() => onTodoPress(todo)} {...rest}>
      <Text style={[styles.text, todo.done ? styles.textDone : {}]}>
        {todo.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  textDone: {
    textDecorationLine: "line-through",
  },
});
