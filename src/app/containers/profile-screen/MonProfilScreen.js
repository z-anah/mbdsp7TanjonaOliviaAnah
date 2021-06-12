import { ApplicationProvider, Text } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";

class MonProfilScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <Text>MonProfilScreen</Text>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

export default MonProfilScreen;
