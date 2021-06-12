import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../containers/HomeScreen";
import ConditionsGeneralesScreen from "../containers/ConditionsGeneralesScreen";
import LangageScreen from "../containers/LangageScreen";
import IdentificationScreen from "../containers/auth-screen/IdentificationScreen";
import AccueilleScreen from "../containers/pari-screen/AccueilleScreen";
import NavigationBottom from "./NavigationBottom";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="NavigationBottom" component={NavigationBottom} />
    {/* <Screen name="AccueilleScreen" component={AccueilleScreen} /> */}
    {/* <Screen name="Identification" component={IdentificationScreen} /> */}
    {/* <Screen name="Conditions Generales" component={ConditionsGeneralesScreen} /> */}
    {/* <Screen name="Home" component={HomeScreen} /> */}
    {/* <Screen name="Langage" component={LangageScreen} /> */}
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
