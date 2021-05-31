import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../containers/HomeScreen";
import ConditionsGeneralesScreen from "../containers/ConditionsGeneralesScreen";
import LangageScreen from "../containers/LangageScreen";
import IdentificationScreen from "../containers/IdentificationScreen";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Conditions Generales" component={ConditionsGeneralesScreen} />
    <Screen name="Identification" component={IdentificationScreen} />
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Langage" component={LangageScreen} />
  </Navigator>
);

export default class AppNavigator extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    );
  }
}
