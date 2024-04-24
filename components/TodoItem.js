import React, { useState } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const TodoItem = ({ topic, text }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <TouchableOpacity classname={styles.flexContainer} onPress={toggleSwitch}>
            <View style={styles.container}>
                <Icon
                    name={isEnabled ? "check-circle" : "circle"}
                    size={30}
                    color={isEnabled ? "green" : "black"}
                    onPress={toggleSwitch}
                />
                <View>
                    <Text style={styles.topic}>{topic}</Text>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 10,
        margin: 10,
        width: 300,
        gap: 10,
        marginVertical: 10,
    },
    topic: {
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        fontSize: 12,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});

export default TodoItem;
