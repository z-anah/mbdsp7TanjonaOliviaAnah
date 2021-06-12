import React from "react";
import {
  ApplicationProvider,
  Button,
  Divider,
  Layout,
  TopNavigation,
  Text,
  RadioGroup,
  Radio,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import ContainerStyle from "../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import i18n from "i18n-js";
import { connect } from "react-redux";

import { changeLang } from "../redux/action";

class LangageScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      test: i18n.t("TRL0001", { user: "anah" }),
      langSelected: "fr",
    };
  }

  _saveLangage = () => {
    this.props.dispatch(changeLang("en-MG"));
    i18n.locale = this.props.lang;
    // this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <TopNavigation title="Langage" alignment="center" />
          <Divider />
          <Text>{this.state.test}</Text>

          <Text>{this.props.lang}</Text>

          <RadioGroup
            onChange={(index) => this.setState({ langSelected: index })}
          >
            <Radio status="checked">{i18n.t("TRL0007")}</Radio>
            <Radio>{i18n.t("TRL0006")}</Radio>
          </RadioGroup>

          <Button onPress={this._saveLangage}>SAVE</Button>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(LangageScreen);
