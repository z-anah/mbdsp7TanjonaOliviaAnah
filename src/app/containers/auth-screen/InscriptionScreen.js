import React from "react";
import {
  ApplicationProvider,
  Button,
  Text,
  Input,
  Icon,
  Avatar,
  Datepicker,
} from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ContainerStyle from "../../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/styles";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import i18n from "i18n-js";

class InscriptionScreen extends React.Component {
  constructor() {
    super();
    this.state = { mdp: "", secureTextEntry: true };
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
              placeholder={i18n.t("TRL0014")}
              label={i18n.t("TRL0014")}
            />

            <Datepicker
              style={styles.loginForm}
              label={i18n.t("TRL0015")}
              placeholder={i18n.t("TRL0015")}
              date={new Date()}
              onSelect={(nextDate) => setDate(nextDate)}
              accessoryRight={CalendarIcon}
            />
            <Input
              style={styles.loginForm}
              placeholder={i18n.t("TRL0009")}
              label={i18n.t("TRL0009")}
            />
            <Input
              style={styles.loginForm}
              value={this.state.mdp}
              label={i18n.t("TRL0010")}
              placeholder={i18n.t("TRL0010")}
              caption={() => this.renderCaption()}
              accessoryRight={(props) => this.renderIcon(props)}
              secureTextEntry={this.state.secureTextEntry}
              onChangeText={(nextValue) => this.setState({ mdp: nextValue })}
            />
            <Button
              style={styles.loginForm}
              onPress={() => this.props.navigation.push("Identification")}
            >
              {i18n.t("TRL0011")}
            </Button>
            <Button
              style={styles.loginForm}
              onPress={() => this.props.navigation.push("Identification")}
            >
              {i18n.t("TRL0004")}
            </Button>
            <TouchableOpacity
              onPress={() => this.props.navigation.push("Recuperation")}
            >
              <Text style={styles.underline} status="info">
                {i18n.t("TRL0012")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.push("Conditions Generales")}
            >
              <Text style={styles.underline} status="info">
                {i18n.t("TRL0013")}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
  toggleSecureEntry = () => {
    this.setState({ secureTextEntry: !this.state.secureTextEntry });
  };
  renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={() => this.toggleSecureEntry()}>
      <Icon {...props} name={this.state.secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );
  renderCaption = () => {
    return (
      <View style={styless.captionContainer}>
        {AlertIcon(styless.captionIcon)}
        <Text style={styless.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };
}

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
const CalendarIcon = (props) => <Icon {...props} name="calendar" />;
const mapStateToProps = (state) => {
  return state;
};

const styless = StyleSheet.create({
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "red",
  },
});
export default connect(mapStateToProps)(InscriptionScreen);
