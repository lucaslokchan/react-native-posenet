# react-native-posenet
 Posenet in React Native

> `npx create-react-native-app my-app -t with-tfjs-camera`

>`cd my-app`

> `npm i @tensorflow-models/posenet`

Replace `ModelView.js` and `PredictionList.js`


## Model Output

Overall Score
> `predictions.score`

Object Contains Body Part, Body Part Score and XY Coordinate
> `predictions.keypoints[n]`

Score of Particular Body Part
> `predictions.keypoints[n].score`

Name of Particular Body Part
> `predictions.keypoints[n].part`

X Coordinate of Particular Body Part
> `predictions.keypoints[n].position.x`

Y Coordinate of Particular Body Part
> `predictions.keypoints[n].position.y`

n   | Body Part 
:---: | :--- 
0 | nose
1 | leftEye
2 | rightEye
3 | leftEar
4 | rightEar
5 | leftShoulder
6 | rightShoulder
7 | leftElbow
8 | rightElbow
9 | leftWrist
10 | rightWrist
11 | leftHip
12 | rightHip
13 | leftKnee
14 | rightKnee
15 | leftAnkle
16 | rightAnkle

## Draw Skeleton from Body Part Coordinates

[reactive-native-svg](https://github.com/react-native-svg/react-native-svg)
