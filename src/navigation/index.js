import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as firebase from "firebase";
import apiKeys from "../../config/keys";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import stackNav from "./stacknav";
import SubjectsNav from "./subjectsnav";
import MainMenuNav from "./MainMenuNav";
import CustomDrawerContent from "./CustomDrawer";

const Drawer = createDrawerNavigator();

if (!firebase.apps.length) {
  firebase.initializeApp(apiKeys.firebaseConfig);
}

const Navigation = () => (
  <NavigationContainer>
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{ backgroundColor: "#D9BFCF", width: 200 }}
      drawerContentOptions={{
        activeTintColor: "#654F6F",
        activeBackgroundColor: "#C299B1",

        itemStyle: { marginVertical: 15, marginBottom: 20 },
        labelStyle: {
          fontSize: 20,
          fontWeight: "bold",
        },
      }}
    >
      <Drawer.Screen
        name=" "
        component={stackNav}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Menu"
        component={MainMenuNav}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Games"
        component={SubjectsNav}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default Navigation;
