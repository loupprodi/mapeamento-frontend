import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./src/screens/Auth";
import MainScreen from "./src/screens/MainScreen";
import UserRegister from "./screens/UserRegister";
import ListStructure from "./screens/ListStructure";
import RegisterStructure from "./screens/RegisterStructure";
import RegisterTag from "./screens/RegisterTag";

const Stack = createNativeStackNavigator();

export const MainRoutesFunc = () => {
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="UserRegister" component={UserRegister} />
      <Stack.Screen name="ListStructure" component={ListStructure} />
      <Stack.Screen name="RegisterStructure" component={RegisterStructure} />
      <Stack.Screen name="RegisterTag" component={RegisterTagg} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  </NavigationContainer>;
};
