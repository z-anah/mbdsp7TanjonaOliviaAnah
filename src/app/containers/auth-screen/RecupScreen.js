import React from "react";
import {
  ApplicationProvider,
  Button,
  Text,
  Input,
  Avatar,
} from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import ContainerStyle from "../../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import i18n from "i18n-js";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/styles";

class RecupScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <View style={[styles.loginContainer]}>
            <Avatar
              style={styles.loginLogo}
              source={require("../../../../assets/adaptive-icon.png")}
            />
            <Input
              style={styles.loginForm}
              placeholder={i18n.t("TRL0009")}
              label={i18n.t("TRL0009")}
            />
            <Button
              style={styles.loginForm}
              onPress={() => this.props.navigation.push("Identification")}
            >
              {i18n.t("TRL0016")}
            </Button>
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(RecupScreen);
