import { ApplicationProvider } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../styles/ContainerStyle";
import styles from "../styles/styles";
import LottieView from "lottie-react-native";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <LottieView
          autoPlay={true}
          loop={false}
          source={require("../../../assets/lottie/7929-run-man-run.json")}
        />
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

  async componentDidMount() {
    await this.setState({
      isLoading: false,
    });
  }
}

const data = {};
const styless = StyleSheet.create({});

export default Test;
