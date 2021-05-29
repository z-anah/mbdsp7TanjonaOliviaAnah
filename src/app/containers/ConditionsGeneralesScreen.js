import React from "react";
import {
  ApplicationProvider,
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import ContainerStyle from "../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import i18n from "i18n-js";

export default class DetailsScreen extends React.Component {
  state = {
    test: i18n.t("TRL0001", { user: "anah" }),
  };

  navigateDetails = () => {
    i18n.locale = "en-MG";
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[{ flex: 1 }, ContainerStyle.AndroidSafeArea]}>
          <TopNavigation title="Conditions Generales" alignment="center" />
          <Divider />
          <Text>{this.state.test}</Text>
          <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Button onPress={this.navigateDetails}>GO TO HOME</Button>
          </Layout>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}
