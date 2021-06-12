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

class IdentificationScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      test: i18n.t("TRL0001", { user: "anah" }),
    };
  }

  render() {
    console.log(styles);
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <View style={[styles.loginContainer]}>
            <Avatar
              style={styles.loginLogo}
              source={require("../../../../assets/adaptive-icon.png")}
            />
            <Input style={styles.loginForm} placeholder="Email" label="Email" />
            <Input
              style={styles.loginForm}
              label="Mot de passe"
              placeholder="Mot de passe"
            />
            <Button style={styles.loginForm}>Se connecter</Button>
            <Button style={styles.loginForm}>Créer un compte</Button>
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
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(IdentificationScreen);
