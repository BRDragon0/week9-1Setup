import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Provider as PaperProvider} from "react-native-paper"

import HomeScreeen from "./screens/homescreen"

const Tab = createBottomTabNavigator();

export default function App(){
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#810012",
            tabBarInactiveBackgroundColor: "#898989",
            headerStyle: {backgroundColor: "#810012"},
            headerTintColor: "#898989"
          }}
        >
        <Tab.Screen name="Home" component={HomeScreeen}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}