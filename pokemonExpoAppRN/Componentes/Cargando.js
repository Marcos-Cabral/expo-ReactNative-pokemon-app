import { ActivityIndicator, StyleSheet, View } from "react-native";
import React from 'react';

export default function Cargando() {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});