import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeMenu from './menus/HomeMenu';
import DetailsMenu from './menus/DetailsMenu';
import SettingsMenu from './menus/SettingsMenu';

//Screen names
const homeMenu = "Home";
const detailsMenu = "Details";
const settingsMenu = "Settings";

const Tab = createBottomTabNavigator();

function TabContainer() {
  return (
      <Tab.Navigator
        initialRouteName={homeMenu}
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeMenu) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === detailsMenu) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsMenu) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }} >

        <Tab.Screen name={homeMenu} component={HomeMenu} options={{headerShown: false}} />
        <Tab.Screen name={detailsMenu} component={DetailsMenu}  options={{headerShown: false}} />
        <Tab.Screen name={settingsMenu} component={SettingsMenu}  options={{headerShown: false}} />
      </Tab.Navigator>
  );
}

export default TabContainer;