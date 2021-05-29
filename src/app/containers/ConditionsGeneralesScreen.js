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

export default class DetailsScreen extends React.Component {
  navigateDetails = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[{ flex: 1 }, ContainerStyle.AndroidSafeArea]}>
          <TopNavigation title="Conditions Generales" alignment="center" />
          <Divider />
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
