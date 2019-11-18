/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import {YellowBox} from 'react-native';

YellowBox.ignoreWarning([
  'Unrecognized WebSocket'
]);

import Routes from "./routes";

export default function App() {
  return <Routes />;
}
