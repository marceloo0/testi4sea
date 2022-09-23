import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/Home';
import { Repository } from '../pages/Repository';

const { Navigator, Screen } = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Repository" component={Repository} />
    </Navigator>
  );
};
