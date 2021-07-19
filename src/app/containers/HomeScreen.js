import {
  ApplicationProvider,
  Button,
  Divider,
  Layout,
  Text,
  TopNavigation,
} from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import ContainerStyle from "../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import i18n from "i18n-js";
import { connect } from "react-redux";

import { increment, decrement } from "../redux/action";

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      messageBienvenue: i18n.t("TRL0001", { user: "anah" }),
    };
  }

  _navigateDetails = () => {
    this.props.navigation.navigate("Conditions Generales");
  };
  _navigateLangage = () => {
    this.props.navigation.navigate("Langage");
  };

  _increment = () => {
    this.props.dispatch(increment());
  };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <TopNavigation title="Home" alignment="center" />
          <Divider />
          <Text>{this.props.reducers.counter}</Text>
          <Text>{this.props.LangReducer.LangReducer}</Text>

          <Button onPress={() => this._increment()}>Increment</Button>
          <Button onPress={() => this.props.dispatch(decrement())}>
            Decrement
          </Button>

          <Layout
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Button onPress={this._navigateDetails}>
              GO TO CONDITIONS GENERALES
            </Button>
            <Button onPress={this._navigateLangage}>GO TO LANGAGE</Button>
          </Layout>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(HomeScreen);
