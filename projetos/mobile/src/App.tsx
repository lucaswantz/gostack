import "react-native-gesture-handler";

import React from "react";
import { View, StatusBar } from "react-native";

import Routes from "./routes";

const App: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: "#F0F0F5" }}>
    <StatusBar barStyle={"dark-content"} backgroundColor="#F0F0F5" />
    <Routes />
  </View>
);

export default App;
