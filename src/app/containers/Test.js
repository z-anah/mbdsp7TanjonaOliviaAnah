import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../styles/ContainerStyle";

class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <ApplicationProvider {...eva} theme={eva.light}>
          <Text>Wait</Text>
        </ApplicationProvider>
      );
    } else {
      return (
        <SafeAreaView style={[ContainerStyle.AndroidSafeAreaClean]}>
          <ApplicationProvider {...eva} theme={eva.light}>
            <Text>Test</Text>
            <View style={styles.container}></View>
          </ApplicationProvider>
        </SafeAreaView>
      );
    }
  }

  async componentDidMount() {}
}

const data = {};
const styless = StyleSheet.create({});

export default Test;
