import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ConditionsGeneralesScreen from "../containers/ConditionsGeneralesScreen";
import LangageScreen from "../containers/LangageScreen";
import IdentificationScreen from "../containers/auth-screen/IdentificationScreen";
import InscriptionScreen from "../containers/auth-screen/InscriptionScreen";
import AccueilleScreen from "../containers/pari-screen/AccueilleScreen";
import NavigationBottom from "./NavigationBottom";
import Test from "../containers/temp/Test";
import Scan from "../containers/temp/Scan";
import Notification from "../containers/temp/Notification";
import RecupScreen from "../containers/auth-screen/RecupScreen";
import CodeQR from "../containers/temp/CodeQR";
import PointVenteScreen from "../containers/profile-screen/PointVenteScreen";
import BarCodeScannerScreen from "../containers/wallet-screen/BarCodeScannerScreen";

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Identification" component={IdentificationScreen} />
    <Screen name="TestCodeQR" component={CodeQR} />
    <Screen name="TestScan" component={Scan} />
    <Screen name="TestTest" component={Test} />
    <Screen name="TestNotification" component={Notification} />
    <Screen name="Inscription" component={InscriptionScreen} />
    <Screen name="Recuperation" component={RecupScreen} />
    <Screen name="AccueilleScreen" component={AccueilleScreen} />
    <Screen name="NavigationBottom" component={NavigationBottom} />
    <Screen name="Conditions Generales" component={ConditionsGeneralesScreen} />
    <Screen name="Langage" component={LangageScreen} />
    <Screen name="PointVenteScreen" component={PointVenteScreen} />
    <Screen name="BarCodeScannerScreen" component={BarCodeScannerScreen} />
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
