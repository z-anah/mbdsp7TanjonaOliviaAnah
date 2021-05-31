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
  Input,
} from "@ui-kitten/components";
import { SafeAreaView, StyleSheet } from "react-native";
import ContainerStyle from "../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import i18n from "i18n-js";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

class IdentificationScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      test: i18n.t("TRL0001", { user: "anah" }),
    };
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[{ flex: 1 }, ContainerStyle.AndroidSafeArea]}>
          <Input placeholder="Email" label="Email" />
          <Input label="Mot de passe" placeholder="Mot de passe" />
          <Button>Se connecter</Button>
          <Button>Créer un compte</Button>
          <TouchableOpacity>
            <Text style={styles.underline} status="info">
              Mot de passe oublié
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.underline} status="info">
              Conditions générales
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
});

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(IdentificationScreen);
