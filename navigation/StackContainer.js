import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import TabMenu from './TabContainer';
import OtherScreen from './screens/OtherScreen';


//Screen names
const tabMenu = "TabMenu";
const otherScreen = "Other";

const Stack = createStackNavigator();

function StackContainer() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name={tabMenu} component={TabMenu} />
        <Stack.Screen name={otherScreen} component={OtherScreen} />
      </Stack.Navigator>
  );
}

export default StackContainer;