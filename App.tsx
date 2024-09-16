import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Todo } from "./types";
import { TodoInput, TodoList } from "./components";
import * as Crypto from "expo-crypto";
import { SafeAreaView } from "react-native-safe-area-context";

const STORAGE_KEY = "@todos";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const loadTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem(STORAGE_KEY);
      if (todos) {
        setTodos(JSON.parse(todos));
      }
    } catch (err) {
      console.error("Failed to load todos", err);
    }
  };

  const storeTodos = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = (todo: Todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const toggleDone = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, done: !t.done } : t))
    );
  };

  useEffect(() => {
    (async () => {
      await storeTodos();
    })();
  }, [todos]);

  useEffect(() => {
    (async () => {
      await loadTodos();
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Todo List</Text>
      <TodoInput
        text={text}
        onChangeText={setText}
        onPressSave={() => {
          if (text.trim().length > 0) {
            setText("");
            addTodo({ id: Crypto.randomUUID(), text, done: false });
          }
        }}
      />
      <TodoList todos={todos} onTodoPress={toggleDone} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  titleText: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
});
