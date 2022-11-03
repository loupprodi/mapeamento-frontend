import { StatusBar } from "expo-status-bar";
import { Auth } from "./src/screens/Auth";
("./src/screens/Auth");
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "./src/screens/MainScreen";
import UserRegister from "./src/screens/UserRegister";
import ListStructure from "./src/screens/ListStructure";
import RegisterStructure from "./src/screens/RegisterStructure";
import RegisterTag from "./src/screens/RegisterTag";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="rgba(0, 0, 0, 0.3)" />
      <Stack.Navigator
        initialRouteName="ListStructure"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="UserRegister" component={UserRegister} />
        <Stack.Screen name="ListStructure" component={ListStructure} />
        <Stack.Screen name="RegisterStructure" component={RegisterStructure} />
        <Stack.Screen name="RegisterTag" component={RegisterTag} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
