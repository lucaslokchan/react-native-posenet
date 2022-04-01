import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function PredictionList({ predictions = {} }) {
  return (
    <><View style={styles.test}>
      <Text> 123213 45454545</Text>
    </View>
    

    <View style={styles.container}>
      <Text style={styles.text} key={`item-0`}>
            {predictions.score}
          </Text>
      </View></>
  );
}

const margin = 24;

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
    position: "absolute",
    bottom: margin,
    left: margin,
    right: margin,
    backgroundColor: "rgba(255,255,255,0.8)",
    padding: 8,
    borderRadius: 20,
    alignItems: "center",
  },
  text: {
    paddingVertical: 2,
    fontSize: 20,
  },
  test: {
    //flex: 1,
    zIndex: 151,
    position: "absolute",
    top: 73,
    bottom: 71,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255,5,255,0.3)",
    // padding: 0,
    //borderRadius: 0,a
    //alignItems: "center",
  },
});
