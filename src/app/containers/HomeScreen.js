import {
  ApplicationProvider,
  Button,
  Divider,
  Layout,
  TopNavigation,
} from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import ContainerStyle from "../styles/ContainerStyle";
import * as eva from "@eva-design/eva";

export default class HomeScreen extends React.Component {
  navigateDetails = () => {
    this.props.navigation.navigate("Conditions Generales");
  };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[{ flex: 1 }, ContainerStyle.AndroidSafeArea]}>
          <TopNavigation title="Home" alignment="center" />
          <Divider />
          <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Button onPress={this.navigateDetails}>
              GO TO CONDITIONS GENERALES
            </Button>
          </Layout>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}
