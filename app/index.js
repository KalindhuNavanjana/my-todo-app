import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import TodoItem from "../components/TodoItem";

const index = () => {
    const [todolist, setTodolist] = useState([
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item",
        },
        {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item",
        },
        {
            id: "58694a0f-3da1-471f-bd96-145571e29d72",
            title: "Third Item",
        },
    ]);

    return (
        <>
            <Stack.Screen options={{ title: "Welcome" }} />
            <View style={styles.container}>
                <Text style={styles.title}>My Todo List</Text>

                {/* list of todo items */}
                <FlatList
                    data={todolist}
                    renderItem={({ item }) => (
                        <TodoItem topic={item.title} text={item.id} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />

                {/* no todo items */}
                {todolist.length === 0 && (
                    <Text style={{ color: "white" }}>No todo items yet!</Text>
                )}
                <View style={styles.separator} />

                {/* link to home screen */}
                <View style={styles.separator} />

                <Link href='/' style={styles.link}>
                    <Text style={styles.linkText}>Go to home screen!</Text>
                </Link>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 20,
        // backgroundColor: "white",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});

export default index;
