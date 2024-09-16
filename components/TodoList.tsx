import { FlatList, StyleSheet } from "react-native";
import { TodoItem } from "./TodoItem";
import { Todo } from "../types";

export interface TodoListProps {
  todos: Todo[];
  onTodoPress: (todo: Todo) => void;
}

export function TodoList({ todos, onTodoPress }: TodoListProps) {
  return (
    <FlatList
      data={todos}
      keyExtractor={(todo) => todo.id}
      renderItem={({ item }) => (
        <TodoItem todo={item} onTodoPress={onTodoPress} style={styles.item} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
  },
});
