import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <View style={{ flex: 1, backgroundColor: '#f0F0f5' }}>
    <StatusBar barStyle="dark-content" backgroundColor="#f0f0f5" />
    <Routes />
  </View>
);

export default App;
