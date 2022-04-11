import React from "react";
import { StyleSheet, Text, View } from "react-native";


export function PredictionList({ predictions = {} }) {
  //let nose = predictions.keypoints[0];
  //let leftEye = predictions.keypoints[1];
  //let rightEye = predictions.keypoints[2];
  //let leftEar = predictions.keypoints[3];
  //let rightEar = predictions.keypoints[4];
  //let leftShoulder = predictions.keypoints[5];
  //let rightShoulder = predictions.keypoints[6];
  //let leftElbow = predictions.keypoints[7];
  //let rightElbow = predictions.keypoints[8];
  //let leftWrist = predictions.keypoints[9];
  //let rightWrist = predictions.keypoints[10];
  //let leftHip = predictions.keypoints[11];
  //let rightHip = predictions.keypoints[12];
  //let leftKnee = predictions.keypoints[13];
  //let rightKnee = predictions.keypoints[14];
  //let leftAnkle = predictions.keypoints[15];
  //let rightAnkle = predictions.keypoints[16];

  return (
    <><View style={styles.test}>
      <Text>Nose</Text>
      <Text>123</Text>
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
